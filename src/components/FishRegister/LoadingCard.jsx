import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const LoadingCard = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
            <CardTitle>Fångar in fiskar...</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Snart visas fiskarna här...</p>
        </CardContent>
    </Card>
);
}

export default LoadingCard