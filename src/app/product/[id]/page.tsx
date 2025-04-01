"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {

    const params = useParams();
    const { id } = params;

    return (
        <div>product {id}</div>
    )
}
