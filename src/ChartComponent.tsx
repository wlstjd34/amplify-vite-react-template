
import { createChart, ColorType } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export const ChartComponent = (props: { data: any; volumeData: any; colors?: { backgroundColor?: "white"; lineColor?: "#2962FF"; textColor?: "black"; areaTopColor?: "rgb(54, 116, 217)" ; areaBottomColor?: "rgb(225, 50, 85)"; }}) => {
    const {
        data,
        volumeData,
        colors: {
            backgroundColor = 'white',
            lineColor = '#2962FF',
            textColor = 'black',
            areaTopColor = 'rgb(54, 116, 217)',
            areaBottomColor = 'rgb(225, 50, 85)',
        } = {},
    } = props;

    const chartContainerRef = useRef<any>();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ 
                    width: chartContainerRef.current.clientWidth,
                    rightPriceScale: {visible: true},
                    leftPriceScale: {visible: true},
                    crosshair: {mode: 0,}
                 });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 500,
                rightPriceScale: {visible: true},
                leftPriceScale: {visible: true},
                crosshair: {mode: 0,}
            });
            const histogramSeries = chart.addHistogramSeries({priceScaleId: 'left', color:'#26B566',
                priceFormat: { type: 'volume'},
            });
            histogramSeries.priceScale().applyOptions({scaleMargins: {top: 0.8, bottom: 0,}});
            histogramSeries.setData(volumeData);
            const candleSeries = chart.addCandlestickSeries({ priceScaleId: 'right', 
                borderVisible: false,
                borderUpColor: areaTopColor, borderDownColor: areaBottomColor,
            });
            candleSeries.priceScale().applyOptions({scaleMargins: {top:0.1, bottom: 0.2,}});
            candleSeries.setData(data);
            chart.timeScale().fitContent();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                chart.remove();
            };
        },
        [data, volumeData, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

export default ChartComponent;
