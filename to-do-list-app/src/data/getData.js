import pb from '/api/pocketbase';
export const dataList = await pb.collection('List').getFullList();

export const data = [
  { title: '모두', count: 0, status: 'all' },
  { title: '한일', count: 0, status: 'done' },
  { title: '할일', count: 0, status: 'todo' },
  { title: '보관', count: 0, status: 'save' },
];

dataList.map((i) => {
  data[0].count = dataList.length;
  if (i.checked) {
    data[1].count += 1;
  }
  if (!i.checked) {
    data[2].count += 1;
  }

  if (i.saved) {
    data[3].count += 1;
  }
});
