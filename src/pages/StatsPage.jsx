import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useState, useEffect } from 'react';


const StatsPage = () => {
  const [year, setYear] = useState("2024")
  const [fishData, setFishData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://xn--dammn-pra.se/wp-json/fishregister/v1/list/";

  useEffect(() => {
    const fetchFishDataByYear = async (year) => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl + year);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setFishData(data.Fish);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    };

    fetchFishDataByYear(year);
  }, []);

  if (isLoading) {
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

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8 border-destructive">
        <CardHeader>
          <CardTitle>Error Loading Data</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">Failed to load fish statistics: {error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Statistik från {year}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Fisk register data for 2020</TableCaption>
          <TableHeader>
            <TableRow>
              {Object.keys(fishData[0] || {}).map((header) => (
                <TableHead key={header} className="capitalize">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {fishData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, cellIndex) => (
                  <TableCell key={cellIndex}>
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StatsPage;