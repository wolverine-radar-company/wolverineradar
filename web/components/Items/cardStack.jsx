export default function CardStack({ title, content, note }) {
    return (
        <div className="relative p-8 bg-wr_gray rounded-lg shadow-lg w-full h-full">
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mt-10 mb-10">{title}</h2>
            <p className="text-xl sm:text-2xl text-wr_text mt-4">{content}</p>
            <p className="text-xs sm:text-sm text-wr_text mt-4">{note}</p>
        </div>
    );
}
