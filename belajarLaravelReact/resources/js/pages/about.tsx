import React from 'react';

interface AboutProps {
    company: string;
    year: number;
}

export default function About({ company, year }: AboutProps) {
    return (
        <>
            <div>
                <h1>About {company}</h1>
                <p>Year {year}</p>
            </div>
        </>
    );
}
