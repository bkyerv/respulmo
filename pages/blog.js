import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import Article from "../components/Article";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Material({ allPostsData }) {
  return (
    <div>
      <h3 className="header">Полезные материалы</h3>
      {allPostsData.map((p) => (
        <div key={p.id}>
          <Link href={`/${p.id}`}>
            <a>
              <Article id={p.id} title={p.title} date={p.date} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
