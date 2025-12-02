import './Table.scss';

import { Table } from 'antd';
import { CSSProperties, JSX, useMemo } from 'react';
import { splitStringAndCapitaliseFirstLetter } from '../../utils/stringUtils';
import ExportableContent from '../common/ExportableContent';
import copyTextToClipboard from '../../utils/copyTextToClipboard';
import MassSpectrometry from '../../types/record/MassSpectrometry';

type InputProps = {
  massSpectrometry: MassSpectrometry | undefined;
  comments?: { value: string }[];
  width: CSSProperties['width'];
  height: CSSProperties['height'];
};

function MassSpectrometryTable({
  massSpectrometry,
  comments,
  width,
  height,
}: InputProps) {
  return useMemo(() => {
    if (!massSpectrometry) {
      return null;
    }

    const columns = [
      {
        title: 'Parameter',
        dataIndex: 'Parameter',
        key: 'parameter',
        align: 'center' as const,
      },
      {
        title: 'Value',
        dataIndex: 'Value',
        key: 'value',
        align: 'center' as const,
      },
    ];

    const dataSource: { [key: string]: string | JSX.Element }[] = [];

    if (massSpectrometry.focused_ion) {
      massSpectrometry.focused_ion.forEach((c, i) => {
        const split = splitStringAndCapitaliseFirstLetter(c.subtag, '_', ' ');

        let displayValue = c.value;
        if (
          split.toLowerCase().includes('precursor m/z') &&
          !isNaN(Number(c.value))
        ) {
          displayValue = Number(c.value).toFixed(4); // round to 4 digits
        }

        dataSource.push({
          Parameter: split,
          Value: (
            <ExportableContent
              mode="copy"
              title={`Copy '${split}' to clipboard`}
              component={displayValue}
              onClick={() => copyTextToClipboard(split, displayValue)}
            />
          ),
          key: `key-chromatography-${i}`,
        });
      });
    }

    
    const allComments = comments || (massSpectrometry as any)?.comments || [];

    if (Array.isArray(allComments) && allComments.length > 0) {
      const ccsComment = allComments.find(
        (c: any) =>
          typeof c.value === 'string' && c.value.toLowerCase().includes('ccs'),
      );

      if (ccsComment) {
        const match = ccsComment.value.match(/[-+]?[0-9]*\.?[0-9]+/);
        if (match) {
          const ccsValue = Number(match[0]).toFixed(4);
          dataSource.push({
            Parameter: 'CCS',
            Value: (
              <ExportableContent
                mode="copy"
                title="Copy \'CCS\' to clipboard"
                component={ccsValue}
                onClick={() => copyTextToClipboard('CCS', ccsValue)}
              />
            ),
            key: 'key-ccs',
          });
        }
      }
    }

    // console.log('CCS Comments Detected:', allComments);


    return (
      <Table
        className="table"
        style={{ width, height }}
        sticky
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    );
  }, [height, massSpectrometry, comments, width]);
}

export default MassSpectrometryTable;
