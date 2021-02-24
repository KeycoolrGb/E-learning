import axios from "axios";
class MovieService {
  fetchMovie() {
    return axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      method: "GET",
    });
  }
  fetchDetailMovie(id) {
    return axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      method: "GET",
    });
  }
}

export default MovieService;
