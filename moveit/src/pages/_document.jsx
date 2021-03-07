import Document, { Html, Head, Main, Nextscript } from "next/document"

export default class Mydocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png"/>
            
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Rajdhani:wght@500;600&display=swap" rel="stylesheet" />

                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <body>
                    <Main />
                    <Nextscript />
                </body>
            </Html>
        )
    }
}