import { NextResponse } from "next/server";
import {promises as fs} from "fs"

export async function POST(request: Request) {
    const formData = await request.formData()
    const file = formData.get("file") as File;
    
    const data = await file.arrayBuffer()

    await fs.writeFile(`${process.cwd()}/pdf/${file.name}`, Buffer.from(data))

    return NextResponse.json("Success!")
}