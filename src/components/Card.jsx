export default function Card({ card }) {
    return (
        <div className="w-fit">
            <img
                src={ card?.img }
            />
            <p className="mt-1 text-center">{ card?.name }</p>
        </div>
    )
}