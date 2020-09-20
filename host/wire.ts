// Read client output
const clientOutput = await Deno.readTextFile('./../client/dist/index.html');
const template = await Deno.readTextFile('./src/client/client_template.ts');

const clientOutputWithParameters = clientOutput.replace(
    '<data-injection></data-injection>',
    `<script>
        Object.assign(window, {
            behold: {
                file: {
                    title: "\${data.file.title}",
                    base64File: {
                        data: "\${data.file.base64File.data}"
                    },
                    mime: "\${data.file.mime}"
                }
            }
        });
    </script>`);

const templateBuilder = template.replaceAll('<template>', clientOutputWithParameters);
await Deno.writeTextFile('./src/client/client.ts', templateBuilder);