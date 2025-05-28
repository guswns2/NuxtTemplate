<script setup lang="ts">
import { ClientOnly } from '#components';

// interface
interface Notice {
  idx: number;
  title: string;
  userId: string;
  createdAt: string;
  content: string;
}

// data
const tableOptions = reactive<TableOptions<Notice>>({
  headers: [
    { title: '번호', key: 'idx', align: 'center', sortable: true },
    { title: '제목', key: 'title', align: 'center', sortable: true },
    { title: '작성자', key: 'userId', align: 'center', sortable: true },
    { title: '작성일', key: 'createdAt', align: 'center', sortable: true }
  ],
  sortBy: [],
  items: [{ idx: 1, title: '제목1', userId: 'id1', createdAt: '2025-05-22 19:32:11', content: 'content1' }],
  loading: true,
  page: 1,
  itemsPerPage: 10,
  search: '',
  searchs: {
    title: '',
    userId: ''
  },
  itemsLength: 0
});

// watch
// :search="tableOption.search" 로 바인딩 되어 있으므로
// 테이블 검색필터 입력을 실시간 감지하여 tableOption.search를 변화시켜
//  update:options를 실행하기 위해 watch 활용
watch(
  () => tableOptions.searchs.title,
  () => {
    tableOptions.search = String(Date.now());
  }
);
watch(
  () => tableOptions.searchs.userId,
  () => {
    tableOptions.search = String(Date.now());
  }
);

// func
function loadItems({ page, itemsPerPage, sortBy }: Pick<TableOptions<Notice>, 'page' | 'itemsPerPage' | 'sortBy'>) {
  tableOptions.loading = true;
  FakeAPI.fetch({
    page,
    itemsPerPage,
    sortBy,
    searchs: {
      title: tableOptions.searchs.title,
      userId: tableOptions.searchs.userId
    }
  }).then(({ items, total }) => {
    tableOptions.items = items;
    tableOptions.itemsLength = total;
    tableOptions.loading = false;
  });
}
const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy, searchs }: Pick<TableOptions<Notice>, 'page' | 'itemsPerPage' | 'sortBy' | 'searchs'>): Promise<Response1<Notice>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = tableOptions.items.slice().filter((item) => {
          if (searchs.title && !item.title.toLowerCase().includes(searchs.title.toLowerCase())) {
            return false;
          }
          if (searchs.userId && !item.userId.toLowerCase().includes(searchs.userId.toLowerCase())) {
            return false;
          }
          return true;
        });

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = Number(a[sortKey]);
            const bValue = Number(b[sortKey]);
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end === -1 ? undefined : end);
        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  }
};

function getNoticeList() {}
</script>

<template>
  <div>
    <v-data-table-server
      v-model:items-per-page="tableOptions.itemsPerPage"
      :headers="tableOptions.headers"
      :items="tableOptions.items"
      :items-length="tableOptions.itemsLength"
      :search="tableOptions.search"
      :loading="tableOptions.loading"
      item-value="idx"
      @update:options="loadItems"
    >
      <template v-slot:tfoot>
        <tr>
          <td>
            <v-text-field v-model="tableOptions.searchs.title" class="ma-2" density="compact" placeholder="제목" hide-details clearable></v-text-field>
          </td>
          <td>
            <v-text-field v-model="tableOptions.searchs.userId" class="ma-2" density="compact" placeholder="작성자" hide-details clearable></v-text-field>
          </td>
        </tr>
      </template>
    </v-data-table-server>
  </div>
</template>

<style lang="scss" scope></style>
