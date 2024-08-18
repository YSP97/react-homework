import pb from '../../api/pocketbase.js';

export const fetchData = async (activeStatus, setList, setStatusData) => {
  const todayDate = new Date().toISOString().split('T')[0];

  const allList = await pb.collection('List').getFullList({
    filter: `created >= '${todayDate}'`,
    sort: '+startTime',
  });

  const filteredList = allList.filter((item) => {
    if (activeStatus === 'done') {
      return item.checked;
    } else if (activeStatus === 'todo') {
      return !item.checked;
    } else if (activeStatus === 'save') {
      return item.saved;
    } else {
      return true;
    }
  });

  setList(filteredList);

  const allCount = allList.length;
  const todoCount = allList.filter((item) => !item.checked).length;
  const doneCount = allList.filter((item) => item.checked).length;
  const saveCount = allList.filter((item) => item.saved).length;

  setStatusData([
    { title: '모두', count: allCount, status: 'all' },
    { title: '할일', count: todoCount, status: 'todo' },
    { title: '한일', count: doneCount, status: 'done' },
    { title: '보관', count: saveCount, status: 'save' },
  ]);
};
