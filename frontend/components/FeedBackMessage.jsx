export function FeedBackMesage({responseCode, message}) {

    const hasResponseCode = responseCode?.length > 0


    if (hasResponseCode) {
        return (
            <AnyMessageBody message={message} />
        )

    }

}

function AnyMessageBody({ message }) {
    return (
        <section>
            <div className="message">
                <p>{message}</p>
            </div>
        </section>
    )

}

