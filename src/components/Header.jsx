// rfce

const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div>
      <h1 className="">My Coursec (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div key={s} className={`${s === "All" ? "active" : ""}`}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
