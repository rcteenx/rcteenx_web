"use client";
import { useState } from "react";
import Link from "next/link";

export default function Search({ ext }) {
  const [search, setSearch] = useState();
  const findSerach = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
    window.location.href = "/ara" + ext + "?q=" + txtAra.value;
  };

  return (
    <div>
      <div>
        <h3>Anahtar Kelime ile Çalışma</h3>
      </div>
      <div>
        <div>
          <form>
            <input id="txtAra" type="ara" placeholder="Ara" aria-label="Ara" />
            <button onClick={findSerach} type="submit">
              Ara
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
