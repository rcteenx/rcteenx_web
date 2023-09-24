"use client";
import { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [search, setSearch] = useState();
  const findSerach = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
    window.location.href = "/ara?q=" + txtAra.value;
  };

  return (
    <div className="card mt-5">
      <div className="card-header">
        <h3>Anahtar Kelime ile Çalışma</h3>
      </div>
      <div className="card-body">
        <div className="input-group flex-column">
          <form className="d-flex" role="ara" action="/ara">
            <input
              id="txtAra"
              className="form-control me-2"
              type="ara"
              placeholder="Ara"
              aria-label="Ara"
            />
            <button
              onClick={findSerach}
              className="btn btn-outline-success"
              type="submit"
            >
              Ara
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
