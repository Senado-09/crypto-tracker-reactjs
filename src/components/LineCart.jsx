import React, { useEffect } from 'react'
import { useState } from 'react'
import Chart from 'react-google-charts'

const LineCart = ({historicalData}) => {

    const [data, setData] = useState([["Date", "Price"]])

    useEffect( () => {
        let dataCopy = ["Date", "Price"]
        if (historicalData.prices) {
            historicalData.prices.map( (item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(dataCopy)
        }
    }, [historicalData])

  return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    />
  )
}

export default LineCart