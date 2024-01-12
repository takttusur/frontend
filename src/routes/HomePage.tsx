import WallpaperCarousel from '../components/WallpaperCarousel'
import CurrentEventsWidget from '../components/CurrentEvents/CurrentEventsWidget'
import EquipmentWidget from '../components/Equipment/EquipmentWidget'
import NewsWidget from '../components/News/NewsWidget'
import { Stack } from '@chakra-ui/react'

export default function HomePage(): JSX.Element {
    const slides = [
        'https://sun9-78.userapi.com/impg/LjIeEz0ME5wW7IjXNinsEstnKlW1wWQfSyJ_uA/IaYGsj-CoZY.jpg?size=2560x1706&quality=95&sign=bdd53cb3634957565062b067d8a65faf&type=album',
        'https://sun9-28.userapi.com/impg/sl70La_j_6sKHkMrmUONL5RpsLDsUWEcvok_ew/VCydqSiHWnk.jpg?size=2560x1440&quality=95&sign=ee32f7cac1963f70603a119c53913eca&type=album',
        'https://sun9-61.userapi.com/impg/I6Ebwt8NtDZ5ilfbZYxk2GcXkwmGkMxyNEktug/H_K8HshSI8E.jpg?size=2560x1920&quality=95&sign=52264ebc92b660fed388b7bf2077e9b5&type=album',
        'https://sun9-23.userapi.com/impg/xHWr1CNaw_8J22DLVFPEUmGv3NyqPNodqMEyyw/c76hDZD1dsc.jpg?size=2560x1238&quality=95&sign=c2ebd17cb97b1597868332b89f11d2db&type=album',
        'https://sun9-55.userapi.com/impg/Wy2U-bMCgAn4wSw67zFEg_MTK5Xo3m32bw_pSA/Atwkq1kDVsU.jpg?size=2560x1443&quality=95&sign=ca32ddf46738dd9d5810ee8d1ec35b8c&type=album',
    ]
    return (
        <Stack>
            <WallpaperCarousel slides={slides} />
            <CurrentEventsWidget />
            <EquipmentWidget />
            <NewsWidget />
        </Stack>
    )
}
