import React from 'react'

import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({data,maxValue}) => {
    console.log("DATA>>>",data)
    let MaxInitialValue=40000000
    const MaxReturn=maxValue.reduce((r,c)=>{
          return Math.max(r,c)
      },0)
      const a=MaxInitialValue+=MaxReturn
    console.log({a})
   
    return (
        
        <div className='container' style={{ height: 500, width: 1500 }}>
            <h5 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>Inventory Amount</h5>
            <ResponsiveLine
                data={data}
                margin={{ top: 10, right:35, bottom: 150, left: 100 }}
                xScale={{ type: 'point' }}
                yscale={{ type: 'linear', min: 0 ,max:'auto', stacked: true, reverse: false }}
                axisTop={null}
                enableGridX={false}
                enableArea={true} 
                enableCrosshair={false}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -40,

                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0

                }}
                colors={{ scheme: 'nivo' }}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'center',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 280,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 15,
                        symbolShape: 'diamond',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                enableSlices='x'
                sliceTooltip={({ slice }) => {
                 
                    return (
                        <div style={{
                            background: '#fff',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                            fontSize:'12px',
                        }}>
                            
                            {slice.points.map(point => (
                                <div
                                    key={point.id}
                                    style={{
                                        color:'black',
                                        padding: '3px 0',
                                    
                                    }}
                                >
                                   <div className="row">
                                       <div className='col'><strong>Amount</strong></div>
                                       <div className='col'><strong>{point.data.y}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Qty</strong></div>
                                       <div className='col'><strong>{point.data.x[0]}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Unit</strong></div>
                                       <div className='col'><strong>{point.data.x[1]}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Product</strong></div>
                                       <div className='col'><strong>{point.data.x[2]}</strong></div>
                                   </div>
                        
                                </div>
                            ))}

                       </div>
                    )
                }}

            />
        </div>
    )
}
export default MyResponsiveLine

