import { Head } from '@inertiajs/react';
import Icon from '@/assets/icon/surrealdb.svg';

export default function HeadLayout({ title }) {

    return (
        <Head title={title}>
            <link rel="shortcut icon" href={Icon} type="image/x-icon" />
        </Head>
    );
}