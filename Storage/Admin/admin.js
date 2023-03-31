let listProduct = [];
let idProductUpdate = "";



function Product(params) {
  // Load nội dung ContentProductAdmin
  $(".ProductAdminSection").load("ProductDetail.html", "data", function (response, status, request) {
    // Sau khi load thành công giao diện mới thực thi các hàm Callback trong này.
  });
}
function handleCreateNewProduct(params) {
  // alert("Create New!!");
  // Lấy dữ liệu từ các ô Input
  var v_Id = $("#Id").val();
  var v_Name = $("#Name").val();
  var v_Price = $("#Price").val();
  var v_Info = $("#Info").val();
  var v_Detail = $("#Detail").val();
  var v_Star = $("#Star").val();
  // Gọi hàm để lấy tên Ảnh
  var v_Image = getImageName($("#Image").val());
  var v_Manufacturer = $("#Manufacturer").val();
  var v_Category = $("#Category").val();

  // Tạo đối tượng ProductNew để lưu trữ
  let ProductNew = {
    id: v_Id,
    name: v_Name,
    price: v_Price,
    info: v_Info,
    detail: v_Detail,
    ratingStar: v_Star,
    imageName: v_Image,
    manufacturerId: v_Manufacturer,
    categoryId: v_Category,
  };
  // console.log("ProductNew: ", ProductNew);

  // Add thêm sản phẩm vào listProduct
  listProduct.push(ProductNew);
  // Lưu dữ liệu localStorage
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  // Thực hiện Reset Form
  handleResetForm();
  // Gọi hàm hiển thị lại danh sách sản phẩm
  fetchListProductAdmin();
}
function fetchListProductAdmin(params) {
  // Reset lại listProduct về Null
  listProduct = [];

  //Lấy dữ liệu từ LocalStorage để sử dụng
  // Kiểm tra xem có dữ liệu dưới LocalStorage không
  if (localStorage && localStorage.getItem("listProduct")) {
    var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
    // Lưu dữ liệu từ localStorage vào listProduct trong JS để sử dụng
    listProduct = listProductLocalStorage;
  }

  //Xóa bảng dữ liệu hiện tại
  $("#tbProductAdmin").empty();
  // Dùng vòng lặp để tạo product
  for (let index = 0; index < listProduct.length; index++) {
    $("#tbProductAdmin").append(`
    <tr>
      <td>${listProduct[index].id}</td>
      <td>${listProduct[index].name}</td>
      <td>${listProduct[index].price}</td>
      <td>${listProduct[index].info}</td>
      <td>${listProduct[index].detail}</td>
      <td>${listProduct[index].ratingStar}</td>
      <td>${listProduct[index].imageName}</td>
      <td>${listProduct[index].manufacturerId}</td>
      <td>${listProduct[index].categoryId}</td>
      <td>
        <button type="button" class="btn btn-warning">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>
  </tr>
    `);
  }
}
function edit(){

}