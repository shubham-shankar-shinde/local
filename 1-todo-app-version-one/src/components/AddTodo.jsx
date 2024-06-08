function AddTodo() {
  return (
    <div class="row kg-row items">
      <div class="col-6">
        <input type="text" placeholder="Input Todo Here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success kg-button">
          ADD
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
