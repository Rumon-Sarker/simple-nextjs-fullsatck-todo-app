import { conectDb } from "@/lib/config/db";
import TodoModal from "@/lib/models/TodoModals";
import { NextResponse } from "next/server";

const loadDb = async () => {
    await conectDb();
}
loadDb();


export async function GET(request) {
    const data = await TodoModal.find({});
    return NextResponse.json({ data: data })
}


export async function POST(request) {
    const { title, description } = await request.json();
    await TodoModal.create({
        title,
        description
    })
    return NextResponse.json({ msg: "Todo Created Success" })
}


export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('_id')
    await TodoModal.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Delete Success" })
}

export async function PUT(request) {
    const id = await request.nextUrl.searchParams.get('_id')
    await TodoModal.findByIdAndUpdate(id, {
        $set: {
            Statuss: true
        }
    });
    return NextResponse.json({ msg: "Complated" })
}
