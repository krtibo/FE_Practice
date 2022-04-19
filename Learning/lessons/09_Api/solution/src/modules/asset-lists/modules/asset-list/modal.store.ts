import { ref, inject, InjectionKey, provide } from 'vue';
import { Api } from 'src/api';
import { Item, List } from 'src/domain';
type ModalStore = ReturnType<typeof setupModalStore>
export const ModalStoreSymbol: InjectionKey<ModalStore> = Symbol('modalStore');

type storeDeps = {
	api: Api
}

export const setupModalStore = ({ api }: storeDeps) => {
	const { editListCall } = api;
	const showNewModal = ref(false);
	const showEditModal = ref(false);
	const showDeleteModal = ref(false);
	const showEditListModal = ref(false);

	const setNewModalVisibility = (value: boolean) => {
		showNewModal.value = value;
	};

	const setEditModalVisibility = (value: boolean) => {
		showEditModal.value = value;
	};

	const setEditListModalVisibility = (value: boolean) => {
		showEditListModal.value = value;
	};

	const setDeleteModalVisibility = (value: boolean) => {
		showDeleteModal.value = value;
	};

	const openNewModal = () => {
		setNewModalVisibility(true);
	};
	const openEditModal = () => {
		setEditModalVisibility(true);
	};
	const openEditListModal = () => {
		setEditListModalVisibility(true);
	};
	const openDeleteModal = () => {
		setDeleteModalVisibility(true);
	};
	return {
		showNewModal,
		showEditModal,
		showDeleteModal,
		showEditListModal,
		setNewModalVisibility,
		setEditModalVisibility,
		setEditListModalVisibility,
		setDeleteModalVisibility,
		openNewModal,
		openEditModal,
		openEditListModal,
		openDeleteModal,
	};
};

export const provideModalStore = (storeDeps: storeDeps) => {
	const modalStore = setupModalStore(storeDeps);
	provide(ModalStoreSymbol, modalStore);
	return modalStore;
};

export const useModalStore = () => {
	return inject(ModalStoreSymbol)!;
};
