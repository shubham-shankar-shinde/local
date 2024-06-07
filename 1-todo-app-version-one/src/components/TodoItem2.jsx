function TodoItem2() {
  let todoname = "GO To Collage";
  let tododate = "04/10/2024";
  return (
    <div class="row kg-row">
      <div class="col-6">{todoname}</div>
      <div class="col-4">{tododate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          DELETE
        </button>
      </div>
    </div>
  );
}
export default TodoItem2;
