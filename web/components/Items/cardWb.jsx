export default function CardWb({ title, number, detail, loading }) {
    return (
        <div className={`${loading ? 'animate-pulse' : ''} p-8 rounded-lg w-100 h-48 overflow-hidden flex flex-col bg-wr_gray border border-accent`}>
            <div className="mb-2 text-white bold text-lg">
                {title}
            </div>
            <div className={`mb-2 text-white text-3xl`}>
                <div className={`${loading ? 'hidden' : 'font-extrabold'}`}>{number}</div>
            </div>
            <div className="text-wr_text text-xl">
            <div className={`${loading ? 'hidden' : 'font-extrabold'}`}>{detail}</div>
            </div>
        </div>
    );
}
