import Link from "next/link";

export default function BlogPost({ date, title, content, id}) {
    return (
        <Link href={`/blog/${id}`}>
            <div className={`p-4 rounded-lg w-100 h-64 overflow-hidden flex flex-col justify-between bg-wr_gray`}>
                    <div className="mb-2 text-wr_text text-sm">
                        {date}
                    </div>
                    <div className="text-white text-2xl">
                        {title}
                    </div>
                    <div className="mb-2 text-wr_text text-md line-clamp-3">
                        {content}
                    </div>
            </div>
        </Link>
    );
}
