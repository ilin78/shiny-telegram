import type { NextPage, GetStaticProps } from 'next'
import Layout from "../components/Layout"
import MyStructure from '../features/structure/MyStructure'
import { UserData } from '../interfaces/struct'

export type UDatePageProps = {
    // причина в массивах, позже исправлю
    userData: any
};

const Structure: NextPage<UDatePageProps> = ({ userData }) => {
    return (
        <Layout title="Моя структура">
            <MyStructure userData={userData} />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps<UDatePageProps> = async () => {
    const userData = [
        [
            1,
            133,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ]
        ],
        [
            2,
            129,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ]
        ],
        [

            3,
            5455,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ]
        ],
        [
            4,
            4500,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ]
        ],
        [
            5,
            43243,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },

            ],
        ],
        [

            6,
            4500,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },

            ],
        ],
        [

            7,
            43243,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [
            8,
            43243,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [

            9,
            4500,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [
            10,
            43243,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [
            11,
            4500,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [

            12,
            5455,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [
            13,
            129,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
        [
            14,
            133,
            [
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
                {
                    image: "SuperGurl",
                    account: "kris_anfalova"
                },
            ],
        ],
    ]

    return {
        props: {
            userData,
        }
    }
}

export default Structure