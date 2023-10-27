import React from "react";
import Link from "next/link";

const WorkList = ({ works, ext }) => {
  return (
    <ul className="my-4 flex gap-4">
      {works.map((work) => (
        <li
          className="p-4 border border-teal-100 rounded-lg shadow-dark shadow-sm hover:bg-teal-100"
          key={work.slug}
        >
          <Link href={`/calisma/${work.slug + ext}`}>
            <h5 className="mb-2 font-bold text-teal-900">{work.title}</h5>
            <p className="font-normal text-gray-700">{work.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WorkList;
