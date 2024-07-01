import { createClient } from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: 'q05g1dss',
    dataset: 'production',
    apiVersion: '2023-05-15',
    useCdn: true,
    token: "skfJPHLoTJbZbbEGMVs94zkdXWIPSDngmLWoKtmJpLKjEjJj2XqWJqVwv6WuVjMVN1jV5OAS6z7TsRv767wFd2dhZy5ecq9yhvEJnZErZRYVnHQSCWy26E8dSRRZDG5G4kmb4Ash0opSaOKhszPY97iB446CIdKxM30Ke5MUMSCgVSd40zN9"
})

const builder = ImageUrlBuilder(client);

export function urlFor(source){ return builder.image(source)}