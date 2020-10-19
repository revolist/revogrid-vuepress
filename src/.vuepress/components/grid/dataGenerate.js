const columns = [
	{
		name: 'Name',
		prop: 'name',
		rowDrag: true,
		sortable: true,
		order: 'asc',
		size: 200,
		pin: 'colPinStart',
		// readonly: true
	},
	{
    size: 60,
    cellTemplate: (createElement, props) =>
      createElement('revo-ui-avatar', {
        name: props.model.name,
        size: 30,
        inline: true,
        letters: 0
      })
	},
	{
		name: 'Personal',
		children: [
			{
				sortable: true,
				name: 'Age',
				prop: 'age',
				// pin: 'colPinEnd',
			},
			{
				sortable: true,
				name: 'Company',
				prop: 'company',
				size: 100,
			},
			{
				name: 'Eyes',
				prop: 'eyeColor',
				sortable: true,
				cellTemplate: (createElement, props) => (
            createElement('span', {
								class: 'bubble',
								style: {
										backgroundColor: props.model[props.prop]
								},
            }, props.model[props.prop])
        )
			},
		]
	}
];
function generateHeader(index) {
  const asciiFirstLetter = 65;
  const lettersCount = 26;
  let div = index + 1;
  let label = '';
  let pos;
  while (div > 0) {
      pos = (div - 1) % lettersCount;
      label = String.fromCharCode(asciiFirstLetter + pos) + label;
      div = parseInt(((div - pos) / lettersCount).toString(), 10);
  }
  return label;
}
export default function generateFakeDataObject(rows, colsNumber) {
  const result = [...rows];

  for (let j = 0; j < colsNumber; j++) {
      columns.push({
          name: generateHeader(j),
          prop: j
      });
  }

  for (let i in result) {
      result[i]['highlighted'] = result[i]['eyeColor'];
      for (let j = 0; j < colsNumber; j++) {
          result[i][j] = `${i}:${j}`;
      }
  }
  const pinnedTopRows = result[10] && [result[10]] || [];
  const pinnedBottomRows = result[1] && [result[1]] || [];

  return {
    source: result,
    pinnedTopRows,
    pinnedBottomRows,
    columns,
  };
}
