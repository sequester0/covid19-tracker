function Header() {
  return (
    <div>
      <div className="flex align-items-center justify-content-center">
        <img
          className="mt-8"
          src="https://world19covid.web.app/static/media/image.d7265326.png"
          alt=""
        />
      </div>
      <div className="flex align-items-center justify-content-center mt-3">
        <span className="font-bold fonttype">
          Global and Country Wise Cases of Corona Virus
        </span>
      </div>
      <div className="flex align-items-center justify-content-center mt-4">
        <span className="fonttype font-italic">
          (For a Particular country, select a Country from below)
        </span>
      </div>
    </div>
  );
}

export default Header;
