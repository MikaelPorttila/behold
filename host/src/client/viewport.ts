export const composeViewport = (base64Img: String) => `
    <html>
        <body>
            <img style="width:100%; height: 100%;" alt="image element" src="${base64Img}" />
        </body>
    </html>
`;