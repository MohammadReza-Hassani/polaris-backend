import { ApiProperty } from '@nestjs/swagger';

export class locationRequestModel {
    // User
    @ApiProperty({ example: 'john_doe', description: 'Username of the user' })
    username: string;

    // GeoPoint
    @ApiProperty({ example: 12.345, description: 'Latitude' })
    lat: number;

    @ApiProperty({ example: 56.789, description: 'Longitude' })
    lng: number;

    @ApiProperty({ example: 1692625200000, description: 'Epoch time in milliseconds' })
    timeMillis: number;

    // Tech & IDs
    @ApiProperty({ example: 'LTE', description: 'Radio technology (e.g., LTE, NR)' })
    radioTech: string;

    @ApiProperty({ example: '4G', description: 'Network generation (e.g., 2G, 3G, 4G, 5G)', required: false })
    generation?: string;

    @ApiProperty({ example: '310260', description: 'PLMN (Public Land Mobile Network)', required: false })
    pLMN?: string;

    @ApiProperty({ example: '310', description: 'Mobile Country Code (MCC)', required: false })
    mcc?: string;

    @ApiProperty({ example: '260', description: 'Mobile Network Code (MNC)', required: false })
    mnc?: string;

    @ApiProperty({ example: 12345, description: 'Location Area Code (LAC)', required: false })
    lac?: number;

    @ApiProperty({ example: 10, description: 'Routing Area Code (RAC)', required: false })
    rac?: number;

    @ApiProperty({ example: 6789, description: 'Tracking Area Code (TAC)', required: false })
    tac?: number;

    @ApiProperty({ example: '123-456-789', description: 'Combined TAC/LAC/RAC identifier', required: false })
    tacLacRac?: string;

    @ApiProperty({ example: 987654321, description: 'Cell ID', required: false })
    cellId?: number;

    // Channels & Frequency
    @ApiProperty({ example: 123, description: 'ARFCN (Absolute Radio Frequency Channel Number)', required: false })
    arfcn?: number;

    @ApiProperty({ example: 456, description: 'UARFCN (UMTS channel number)', required: false })
    uarfcn?: number;

    @ApiProperty({ example: 789, description: 'EARFCN (LTE channel number)', required: false })
    earfcn?: number;

    @ApiProperty({ example: 123456, description: 'NRARFCN (5G channel number)', required: false })
    nrarfcn?: number;

    @ApiProperty({ example: 'B3', description: 'Frequency band', required: false })
    band?: string;

    @ApiProperty({ example: 1805000000, description: 'Downlink frequency in Hz', required: false })
    downlinkFreqHz?: number;

    // Signal
    @ApiProperty({ example: -95, description: 'RSRP (Reference Signal Received Power)', required: false })
    rSRP?: number;

    @ApiProperty({ example: -10, description: 'RSRQ (Reference Signal Received Quality)', required: false })
    rSRQ?: number;

    @ApiProperty({ example: -85, description: 'RSCP (Received Signal Code Power)', required: false })
    rSCP?: number;

    @ApiProperty({ example: -5, description: 'Ec/No (UMTS signal quality)', required: false })
    ecNo?: number;

    @ApiProperty({ example: -70, description: 'RxLev (Received Level)', required: false })
    rxLev?: number;

    @ApiProperty({ example: 20, description: 'SINR (Signal-to-Interference-plus-Noise Ratio)', required: false })
    sinr?: number;
}
