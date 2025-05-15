import { doc } from "@/services/google-spreadsheet";
import { NextRequest, NextResponse } from "next/server";

const sheets = ['users', 'submissions'];

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ sheet: string }> }
) {
    const { sheet } = await params;
    const sheetIndex = sheets.findIndex(s => sheet === s);

    const { name, phoneNumber, region } = await request.json();

    const isAllowed = !!name && !!phoneNumber && !!region

    if (!sheetIndex) {
        if (isAllowed) {

            try {
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[sheetIndex];

                sheet.addRow({
                    name,
                    region,
                    phone_number: phoneNumber
                })

                return NextResponse.json({
                    data: 'Successfully to insert the data'
                }, {
                    status: 200
                })
            } catch (error) {
                return NextResponse.json({ message: 'Error while inserting data' }, {
                    status: 500
                })
            }
        }

        return NextResponse.json({ message: 'Please fill name, phoneNumber, and region' }, {
            status: 400
        })
    }

    return NextResponse.json({ message: 'Endpoint not found' }, {
        status: 500
    })
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ sheet: string }> }
) {
    const { sheet } = await params;
    const sheetIndex = sheets.findIndex(s => sheet === s);

    const searchParams = request.nextUrl.searchParams

    const page = searchParams.get('page')
    const limit = searchParams.get('limit')


    if (!sheetIndex) {
        try {
            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[sheetIndex];

            const rowOptions = !!page && !!limit ? {
                offset: (Number(page) - 1) * Number(limit),
                limit: Number(limit),
            } : undefined
            const rows = await sheet.getRows(rowOptions);

            return NextResponse.json({
                data: rows.map(r => r.toObject())
            }, {
                status: 200
            })
        } catch (error) {
            return NextResponse.json({ message: 'Error while getting data' }, {
                status: 500
            })
        }
    }

    return NextResponse.json({ message: 'Endpoint not found' }, {
        status: 500
    })
}