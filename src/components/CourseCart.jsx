function CourseCart({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt="image-1" />
      </div>
      <div className="course-item__detail">
        <CourseCartBody
          title={course.title}
          description={course.description}
          rate={course.rate}
        />
        <CourseCartFooter
          tags={course.tags}
          start={course.start}
          status={course.status}
        />
      </div>
    </div>
  );
}

export default CourseCart;

function CourseCartBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">
        <span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </svg>
        </span>
        

        {rate}
      </span>
    </div>
  );
}

function CourseCartFooter({ tags, start, status }) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((tag) => (
          <span className="badge badge--secondary">{tag}</span>
        ))}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(start).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        <span
          className={`badge ${
            status === "Active"
              ? "badge--primary"
              : status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
