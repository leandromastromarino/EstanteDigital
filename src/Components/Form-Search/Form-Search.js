function FormSearch() {
  return (
    <div class="mb-3 px-2">
      <input
        type="search"
        class="relative m-0 block w-full min-w-0 bg-white rounded-full flex-auto  border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-primario outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        id="exampleSearch"
        placeholder="Buscar Libro"
      />
    </div>
  );
}

export default FormSearch;