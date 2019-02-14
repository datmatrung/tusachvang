var MaSanPhamCuoi = 1;
var arrSanPham = Array();

function ThemSanPham() {
    var maSanPham = MaSanPhamCuoi;
    var tenSanPham = document.getElementById('txtTenSanPham').value;
    var loaiSanPham = document.getElementById('cmbLoaiSanPham').value;


    var sanPham = { maSanPham, tenSanPham, loaiSanPham };
    arrSanPham.push(sanPham);
    
    MaSanPhamCuoi++;
    LoadDanhSachSanPham();
}

function XoaSanPham(maSanPham) {
    for(var i = 0; i < arrSanPham.length; i++){
        if( maSanPham === arrSanPham[i].maSanPham) {
            arrSanPham.splice(i, 1);
            LoadDanhSachSanPham();
            break;
        }
    }
}

function CapNhatSanPham(maSanPham) {
    for(var i = 0; i < arrSanPham.length; i++){
        if( maSanPham === arrSanPham[i].maSanPham) {
            document.getElementById("txtMaSanPham").value = arrSanPham[i].maSanPham;
            document.getElementById("txtTenSanPham").value = arrSanPham[i].tenSanPham;
            document.getElementById("cmbLoaiSanPham").value = arrSanPham[i].loaiSanPham;
            break;
        }
    }
}

function LuuCapNhat() {
    for(var i = 0; i < arrSanPham.length; i++){
        if( document.getElementById("txtMaSanPham").value == arrSanPham[i].maSanPham) {
            arrSanPham[i].tenSanPham = document.getElementById("txtTenSanPham").value;
            arrSanPham[i].loaiSanPham = document.getElementById("cmbLoaiSanPham").value;

            document.getElementById("txtMaSanPham").value = "";
            document.getElementById("txtTenSanPham").value = "";

            LoadDanhSachSanPham();
            break;
        }
    }
}

function LoadDanhSachSanPham()
{
    
    var tbodyNode = document.getElementById('idDanhSachSanPham');
    tbodyNode.innerHTML = "";

    for(var i = 0; i < arrSanPham.length; i++)
    {
        var trNode = document.createElement('tr');

        var tdMaNode = document.createElement('td');
        var maNode = document.createTextNode(arrSanPham[i].maSanPham);
        tdMaNode.appendChild(maNode);

        var tdTenSanPhamNode = document.createElement('td');
        var tenNode = document.createTextNode(arrSanPham[i].tenSanPham);
        tdTenSanPhamNode.appendChild(tenNode);

        var tdLoaiSanPhamNode = document.createElement('td');
        var loaiNode = document.createTextNode(arrSanPham[i].loaiSanPham);
        tdLoaiSanPhamNode.appendChild(loaiNode);

        var tdHanhDongNode = document.createElement('td');
        
        var btnXoaNode = document.createElement('button');
        btnXoaNode.type = "button";
        btnXoaNode.innerText = "Xóa";
        btnXoaNode.setAttribute('onclick', "XoaSanPham(" + arrSanPham[i].maSanPham + ")");
        

        var btnCapNhatNode = document.createElement('button');
        btnCapNhatNode.type = "button";
        btnCapNhatNode.innerText = "Cập nhật";
        btnCapNhatNode.setAttribute('onclick',"CapNhatSanPham(" + arrSanPham[i].maSanPham + ")");

        tdHanhDongNode.appendChild(btnXoaNode);
        tdHanhDongNode.appendChild(btnCapNhatNode);

        trNode.appendChild(tdMaNode);
        trNode.appendChild(tdTenSanPhamNode);
        trNode.appendChild(tdLoaiSanPhamNode);
        trNode.appendChild(tdHanhDongNode);

        tbodyNode.appendChild(trNode);
    }

    
}