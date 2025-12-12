// ============================
// Finnish A1 Learning Website
// Data File
// ============================

// Alphabet Data
const alphabetData = [
    { letter: 'A a', pronunciation: 'a (như tiếng Việt)', example: 'auto (ô tô)' },
    { letter: 'B b', pronunciation: 'be', example: 'bussi (xe buýt)' },
    { letter: 'C c', pronunciation: 'se (ít dùng)', example: 'celsius' },
    { letter: 'D d', pronunciation: 'de', example: 'hedelmä (trái cây)' },
    { letter: 'E e', pronunciation: 'e (như tiếng Việt)', example: 'ei (không)' },
    { letter: 'F f', pronunciation: 'ef (ít dùng)', example: 'filosofia' },
    { letter: 'G g', pronunciation: 'ge', example: 'galleria' },
    { letter: 'H h', pronunciation: 'hô (bật hơi nhẹ)', example: 'hei (xin chào)' },
    { letter: 'I i', pronunciation: 'i (như tiếng Việt)', example: 'iso (to, lớn)' },
    { letter: 'J j', pronunciation: 'Y (như "y" tiếng Việt) ⚠️', example: 'ja (và) đọc "ya"' },
    { letter: 'K k', pronunciation: 'kô', example: 'kiitos (cảm ơn)' },
    { letter: 'L l', pronunciation: 'el', example: 'lapsi (trẻ em)' },
    { letter: 'M m', pronunciation: 'em', example: 'minä (tôi)' },
    { letter: 'N n', pronunciation: 'en', example: 'nimi (tên)' },
    { letter: 'O o', pronunciation: 'o (như tiếng Việt)', example: 'omena (táo)' },
    { letter: 'P p', pronunciation: 'pe', example: 'puhelin (điện thoại)' },
    { letter: 'Q q', pronunciation: 'ku (rất ít dùng)', example: 'quiz' },
    { letter: 'R r', pronunciation: 'er (rung lưỡi)', example: 'ruoka (đồ ăn)' },
    { letter: 'S s', pronunciation: 'es', example: 'suomi (Phần Lan)' },
    { letter: 'T t', pronunciation: 'te', example: 'talo (nhà)' },
    { letter: 'U u', pronunciation: 'u (như tiếng Việt)', example: 'uusi (mới)' },
    { letter: 'V v', pronunciation: 've', example: 'vesi (nước)' },
    { letter: 'W w', pronunciation: 've kaksois (ít dùng)', example: 'wifi' },
    { letter: 'X x', pronunciation: 'eks (ít dùng)', example: 'taxi' },
    { letter: 'Y y', pronunciation: 'ü (tròn môi, lưỡi như "i")', example: 'yksi (một)' },
    { letter: 'Z z', pronunciation: 'tset (ít dùng)', example: 'pizza' },
    { letter: 'Å å', pronunciation: 'o dài (từ Thụy Điển)', example: 'Åland' },
    { letter: 'Ä ä', pronunciation: 'e (như tiếng Việt)', example: 'äiti (mẹ)' },
    { letter: 'Ö ö', pronunciation: 'ơ (như tiếng Việt)', example: 'öljy (dầu)' }
];

// Cases Data
const casesData = [
    { name: 'Nominatiivi', ending: '(gốc)', usage: 'Chủ ngữ', example: 'Talo on iso. (Nhà thì to.)' },
    { name: 'Partitiivi', ending: '-a/-ä, -ta/-tä', usage: 'Tân ngữ không xác định', example: 'Juon kahvia. (Tôi uống cà phê.)' },
    { name: 'Genetiivi', ending: '-n', usage: 'Sở hữu', example: 'Minun nimeni on... (Tên của tôi là...)' },
    { name: 'Inessiivi', ending: '-ssa/-ssä', usage: 'Ở trong', example: 'Olen Suomessa. (Tôi ở Phần Lan.)' },
    { name: 'Elatiivi', ending: '-sta/-stä', usage: 'Từ trong ra', example: 'Tulen Vietnamista. (Tôi đến từ VN.)' },
    { name: 'Illatiivi', ending: '-an/-en/-iin...', usage: 'Vào trong', example: 'Menen kauppaan. (Tôi đi vào cửa hàng.)' },
    { name: 'Adessiivi', ending: '-lla/-llä', usage: 'Ở trên/tại', example: 'Olen torilla. (Tôi ở chợ.)' },
    { name: 'Ablatiivi', ending: '-lta/-ltä', usage: 'Từ trên/từ', example: 'Tulen torilta. (Tôi đến từ chợ.)' },
    { name: 'Allatiivi', ending: '-lle', usage: 'Đến/cho', example: 'Menen torille. (Tôi đi đến chợ.)' }
];

// Questions Data
const questionsData = [
    { word: 'Mikä?', meaning: 'Cái gì?', example: 'Mikä tämä on? (Cái này là gì?)' },
    { word: 'Kuka?', meaning: 'Ai?', example: 'Kuka hän on? (Anh ấy là ai?)' },
    { word: 'Missä?', meaning: 'Ở đâu?', example: 'Missä sinä asut? (Bạn sống ở đâu?)' },
    { word: 'Mistä?', meaning: 'Từ đâu?', example: 'Mistä olet kotoisin? (Bạn đến từ đâu?)' },
    { word: 'Mihin?', meaning: 'Đi đâu?', example: 'Mihin sinä menet? (Bạn đi đâu?)' },
    { word: 'Milloin?', meaning: 'Khi nào?', example: 'Milloin tulet? (Bạn đến khi nào?)' },
    { word: 'Miksi?', meaning: 'Tại sao?', example: 'Miksi olet täällä? (Tại sao bạn ở đây?)' },
    { word: 'Miten?', meaning: 'Như thế nào?', example: 'Miten voit? (Bạn khỏe không?)' },
    { word: 'Paljonko?', meaning: 'Bao nhiêu (tiền)?', example: 'Paljonko tämä maksaa? (Cái này bao nhiêu?)' },
    { word: 'Kuinka monta?', meaning: 'Bao nhiêu (số lượng)?', example: 'Kuinka monta lasta? (Bao nhiêu con?)' },
    { word: 'Kuinka vanha?', meaning: 'Bao nhiêu tuổi?', example: 'Kuinka vanha olet? (Bạn bao nhiêu tuổi?)' }
];

// Verb Types Data
const verbTypesData = {
    type1: {
        title: 'Loại 1: Kết thúc nguyên âm + A/Ä',
        identify: 'Nhận biết: -ua, -aa, -ea, -iä, -yä...',
        findStem: 'Tìm gốc: Bỏ -A/-Ä',
        examples: 'puhua → puhu-, asua → asu-, lukea → luke-',
        verbs: [
            { infinitive: 'puhua', meaning: 'nói', stem: 'puhu',
              conjugation: ['puhun', 'puhut', 'puhuu', 'puhumme', 'puhutte', 'puhuvat'] },
            { infinitive: 'asua', meaning: 'sống/ở', stem: 'asu',
              conjugation: ['asun', 'asut', 'asuu', 'asumme', 'asutte', 'asuvat'] },
            { infinitive: 'sanoa', meaning: 'nói', stem: 'sano',
              conjugation: ['sanon', 'sanot', 'sanoo', 'sanomme', 'sanotte', 'sanovat'] },
            { infinitive: 'lukea', meaning: 'đọc', stem: 'luke',
              conjugation: ['luen', 'luet', 'lukee', 'luemme', 'luette', 'lukevat'] },
            { infinitive: 'antaa', meaning: 'cho', stem: 'anta',
              conjugation: ['annan', 'annat', 'antaa', 'annamme', 'annatte', 'antavat'] },
            { infinitive: 'ostaa', meaning: 'mua', stem: 'osta',
              conjugation: ['ostan', 'ostat', 'ostaa', 'ostamme', 'ostatte', 'ostavat'] }
        ]
    },
    type2: {
        title: 'Loại 2: Kết thúc -DA/-DÄ',
        identify: 'Nhận biết: -da, -dä',
        findStem: 'Tìm gốc: Bỏ -DA/-DÄ',
        examples: 'syödä → syö-, juoda → juo-, viedä → vie-',
        note: '⚠️ Ngôi Hän KHÔNG kéo dài (vì đã có nguyên âm kép)',
        verbs: [
            { infinitive: 'syödä', meaning: 'ăn', stem: 'syö',
              conjugation: ['syön', 'syöt', 'syö', 'syömme', 'syötte', 'syövät'] },
            { infinitive: 'juoda', meaning: 'uống', stem: 'juo',
              conjugation: ['juon', 'juot', 'juo', 'juomme', 'juotte', 'juovat'] },
            { infinitive: 'viedä', meaning: 'mang đi', stem: 'vie',
              conjugation: ['vien', 'viet', 'vie', 'viemme', 'viette', 'vievät'] },
            { infinitive: 'tuoda', meaning: 'mang đến', stem: 'tuo',
              conjugation: ['tuon', 'tuot', 'tuo', 'tuomme', 'tuotte', 'tuovat'] },
            { infinitive: 'käydä', meaning: 'đi/ghé thăm', stem: 'käy',
              conjugation: ['käyn', 'käyt', 'käy', 'käymme', 'käytte', 'käyvät'] },
            { infinitive: 'saada', meaning: 'được/nhận', stem: 'saa',
              conjugation: ['saan', 'saat', 'saa', 'saamme', 'saatte', 'saavat'] }
        ]
    },
    type3: {
        title: 'Loại 3: Kết thúc phụ âm + A/Ä',
        identify: 'Nhận biết: -lla, -nna, -rra, -sta...',
        findStem: 'Tìm gốc: Bỏ -A/-Ä, thêm -E',
        examples: 'tulla → tule-, mennä → mene-, olla → ole-',
        note: '⚠️ OLLA bất quy tắc: Hän = "on", He = "ovat"',
        verbs: [
            { infinitive: 'tulla', meaning: 'đến', stem: 'tule',
              conjugation: ['tulen', 'tulet', 'tulee', 'tulemme', 'tulette', 'tulevat'] },
            { infinitive: 'mennä', meaning: 'đi', stem: 'mene',
              conjugation: ['menen', 'menet', 'menee', 'menemme', 'menette', 'menevät'] },
            { infinitive: 'olla', meaning: 'là/ở', stem: 'ole',
              conjugation: ['olen', 'olet', 'on', 'olemme', 'olette', 'ovat'], irregular: true },
            { infinitive: 'purra', meaning: 'cắn', stem: 'pure',
              conjugation: ['puren', 'puret', 'puree', 'puremme', 'purette', 'purevat'] },
            { infinitive: 'nousta', meaning: 'đứng dậy', stem: 'nouse',
              conjugation: ['nousen', 'nouset', 'nousee', 'nousemme', 'nousette', 'nousevat'] },
            { infinitive: 'pestä', meaning: 'rửa', stem: 'pese',
              conjugation: ['pesen', 'peset', 'pesee', 'pesemme', 'pesette', 'pesevät'] }
        ]
    },
    type4: {
        title: 'Loại 4: Kết thúc nguyên âm + TA/TÄ',
        identify: 'Nhận biết: -ata, -ota, -ätä...',
        findStem: 'Tìm gốc: Bỏ -TA/-TÄ, thêm -A/-Ä',
        examples: 'haluta → halua-, tavata → tapaa-',
        note: '⚠️ Có consonant gradation (biến đổi phụ âm)',
        verbs: [
            { infinitive: 'haluta', meaning: 'muốn', stem: 'halua',
              conjugation: ['haluan', 'haluat', 'haluaa', 'haluamme', 'haluatte', 'haluavat'] },
            { infinitive: 'tavata', meaning: 'gặp', stem: 'tapaa',
              conjugation: ['tapaan', 'tapaat', 'tapaa', 'tapaamme', 'tapaatte', 'tapaavat'] },
            { infinitive: 'herätä', meaning: 'thức dậy', stem: 'herää',
              conjugation: ['herään', 'heräät', 'herää', 'heräämme', 'heräätte', 'heräävät'] },
            { infinitive: 'pelätä', meaning: 'sợ', stem: 'pelkää',
              conjugation: ['pelkään', 'pelkäät', 'pelkää', 'pelkäämme', 'pelkäätte', 'pelkäävät'] }
        ]
    },
    type5: {
        title: 'Loại 5: Kết thúc -ITA/-ITÄ',
        identify: 'Nhận biết: -ita, -itä',
        findStem: 'Tìm gốc: Bỏ -TA/-TÄ, thêm -TSE',
        examples: 'tarvita → tarvitse-, valita → valitse-',
        verbs: [
            { infinitive: 'tarvita', meaning: 'cần', stem: 'tarvitse',
              conjugation: ['tarvitsen', 'tarvitset', 'tarvitsee', 'tarvitsemme', 'tarvitsette', 'tarvitsevat'] },
            { infinitive: 'valita', meaning: 'chọn', stem: 'valitse',
              conjugation: ['valitsen', 'valitset', 'valitsee', 'valitsemme', 'valitsette', 'valitsevat'] },
            { infinitive: 'häiritä', meaning: 'làm phiền', stem: 'häiritse',
              conjugation: ['häiritsen', 'häiritset', 'häiritsee', 'häiritsemme', 'häiritsette', 'häiritsevät'] }
        ]
    },
    type6: {
        title: 'Loại 6: Kết thúc -ETA/-ETÄ',
        identify: 'Nhận biết: -eta, -etä',
        findStem: 'Tìm gốc: Bỏ -TA/-TÄ, thêm -NE',
        examples: 'vanheta → vanhene-, paeta → pakene-',
        verbs: [
            { infinitive: 'vanheta', meaning: 'già đi', stem: 'vanhene',
              conjugation: ['vanhenen', 'vanhenet', 'vanhenee', 'vanhenemme', 'vanhenette', 'vanhenevat'] },
            { infinitive: 'paeta', meaning: 'chạy trốn', stem: 'pakene',
              conjugation: ['pakenen', 'pakenet', 'pakenee', 'pakenemme', 'pakenette', 'pakenevat'] },
            { infinitive: 'kylmetä', meaning: 'lạnh đi', stem: 'kylmene',
              conjugation: ['kylmenen', 'kylmenet', 'kylmenee', 'kylmenemme', 'kylmenette', 'kylmenevät'] }
        ]
    }
};

// Vocabulary Data
const vocabularyData = {
    numbers: {
        title: '📊 Số đếm (0-1000)',
        icon: '📊',
        words: [
            { finnish: 'nolla', vietnamese: '0' },
            { finnish: 'yksi', vietnamese: '1' },
            { finnish: 'kaksi', vietnamese: '2' },
            { finnish: 'kolme', vietnamese: '3' },
            { finnish: 'neljä', vietnamese: '4' },
            { finnish: 'viisi', vietnamese: '5' },
            { finnish: 'kuusi', vietnamese: '6' },
            { finnish: 'seitsemän', vietnamese: '7' },
            { finnish: 'kahdeksan', vietnamese: '8' },
            { finnish: 'yhdeksän', vietnamese: '9' },
            { finnish: 'kymmenen', vietnamese: '10' },
            { finnish: 'yksitoista', vietnamese: '11' },
            { finnish: 'kaksitoista', vietnamese: '12' },
            { finnish: 'kaksikymmentä', vietnamese: '20' },
            { finnish: 'kaksikymmentäyksi', vietnamese: '21' },
            { finnish: 'kolmekymmentä', vietnamese: '30' },
            { finnish: 'sata', vietnamese: '100' },
            { finnish: 'tuhat', vietnamese: '1000' }
        ]
    },
    days: {
        title: '📅 Ngày trong tuần',
        icon: '📅',
        words: [
            { finnish: 'maanantai', vietnamese: 'Thứ 2' },
            { finnish: 'tiistai', vietnamese: 'Thứ 3' },
            { finnish: 'keskiviikko', vietnamese: 'Thứ 4' },
            { finnish: 'torstai', vietnamese: 'Thứ 5' },
            { finnish: 'perjantai', vietnamese: 'Thứ 6' },
            { finnish: 'lauantai', vietnamese: 'Thứ 7' },
            { finnish: 'sunnuntai', vietnamese: 'Chủ nhật' }
        ],
        tip: '💡 Tip: Tất cả kết thúc -TAI trừ keskiviikko'
    },
    months: {
        title: '📆 Tháng trong năm',
        icon: '📆',
        words: [
            { finnish: 'tammikuu', vietnamese: 'Tháng 1' },
            { finnish: 'helmikuu', vietnamese: 'Tháng 2' },
            { finnish: 'maaliskuu', vietnamese: 'Tháng 3' },
            { finnish: 'huhtikuu', vietnamese: 'Tháng 4' },
            { finnish: 'toukokuu', vietnamese: 'Tháng 5' },
            { finnish: 'kesäkuu', vietnamese: 'Tháng 6' },
            { finnish: 'heinäkuu', vietnamese: 'Tháng 7' },
            { finnish: 'elokuu', vietnamese: 'Tháng 8' },
            { finnish: 'syyskuu', vietnamese: 'Tháng 9' },
            { finnish: 'lokakuu', vietnamese: 'Tháng 10' },
            { finnish: 'marraskuu', vietnamese: 'Tháng 11' },
            { finnish: 'joulukuu', vietnamese: 'Tháng 12' }
        ]
    },
    family: {
        title: '👨‍👩‍👧‍👦 Gia đình',
        icon: '👨‍👩‍👧‍👦',
        words: [
            { finnish: 'perhe', vietnamese: 'gia đình' },
            { finnish: 'äiti', vietnamese: 'mẹ' },
            { finnish: 'isä', vietnamese: 'bố' },
            { finnish: 'vanhemmat', vietnamese: 'bố mẹ' },
            { finnish: 'lapsi', vietnamese: 'con' },
            { finnish: 'poika', vietnamese: 'con trai' },
            { finnish: 'tyttö', vietnamese: 'con gái' },
            { finnish: 'veli', vietnamese: 'anh/em trai' },
            { finnish: 'sisko', vietnamese: 'chị/em gái' },
            { finnish: 'aviomies', vietnamese: 'chồng' },
            { finnish: 'aviovaimo', vietnamese: 'vợ' },
            { finnish: 'isovanhemmat', vietnamese: 'ông bà' },
            { finnish: 'isoäiti', vietnamese: 'bà' },
            { finnish: 'isoisä', vietnamese: 'ông' },
            { finnish: 'täti', vietnamese: 'cô/dì' },
            { finnish: 'setä', vietnamese: 'chú/bác (bên bố)' },
            { finnish: 'eno', vietnamese: 'cậu (bên mẹ)' }
        ]
    },
    colors: {
        title: '🎨 Màu sắc',
        icon: '🎨',
        words: [
            { finnish: 'valkoinen', vietnamese: 'trắng' },
            { finnish: 'musta', vietnamese: 'đen' },
            { finnish: 'punainen', vietnamese: 'đỏ' },
            { finnish: 'sininen', vietnamese: 'xanh dương' },
            { finnish: 'vihreä', vietnamese: 'xanh lá' },
            { finnish: 'keltainen', vietnamese: 'vàng' },
            { finnish: 'oranssi', vietnamese: 'cam' },
            { finnish: 'violetti', vietnamese: 'tím' },
            { finnish: 'ruskea', vietnamese: 'nâu' },
            { finnish: 'harmaa', vietnamese: 'xám' },
            { finnish: 'vaaleanpunainen', vietnamese: 'hồng' }
        ]
    },
    food: {
        title: '🍽️ Đồ ăn & Thức uống',
        icon: '🍽️',
        words: [
            { finnish: 'ruoka', vietnamese: 'đồ ăn' },
            { finnish: 'juoma', vietnamese: 'đồ uống' },
            { finnish: 'vesi', vietnamese: 'nước' },
            { finnish: 'kahvi', vietnamese: 'cà phê' },
            { finnish: 'tee', vietnamese: 'trà' },
            { finnish: 'maito', vietnamese: 'sữa' },
            { finnish: 'leipä', vietnamese: 'bánh mì' },
            { finnish: 'juusto', vietnamese: 'phô mai' },
            { finnish: 'liha', vietnamese: 'thịt' },
            { finnish: 'kala', vietnamese: 'cá' },
            { finnish: 'kana', vietnamese: 'gà' },
            { finnish: 'riisi', vietnamese: 'cơm' },
            { finnish: 'hedelmä', vietnamese: 'trái cây' },
            { finnish: 'vihannes', vietnamese: 'rau củ' },
            { finnish: 'omena', vietnamese: 'táo' },
            { finnish: 'banaani', vietnamese: 'chuối' }
        ]
    },
    places: {
        title: '🏢 Địa điểm',
        icon: '🏢',
        words: [
            { finnish: 'kaupunki', vietnamese: 'thành phố' },
            { finnish: 'koti', vietnamese: 'nhà' },
            { finnish: 'koulu', vietnamese: 'trường' },
            { finnish: 'sairaala', vietnamese: 'bệnh viện' },
            { finnish: 'apteekki', vietnamese: 'hiệu thuốc' },
            { finnish: 'kauppa', vietnamese: 'cửa hàng' },
            { finnish: 'ravintola', vietnamese: 'nhà hàng' },
            { finnish: 'pankki', vietnamese: 'ngân hàng' },
            { finnish: 'kirjasto', vietnamese: 'thư viện' },
            { finnish: 'talo', vietnamese: 'tòa nhà' },
            { finnish: 'asunto', vietnamese: 'căn hộ' },
            { finnish: 'huone', vietnamese: 'phòng' },
            { finnish: 'yliopisto', vietnamese: 'đại học' },
            { finnish: 'posti', vietnamese: 'bưu điện' },
            { finnish: 'kirkko', vietnamese: 'nhà thờ' },
            { finnish: 'rautatieasema', vietnamese: 'nhà ga' },
            { finnish: 'lentokenttä', vietnamese: 'sân bay' },
            { finnish: 'bussiasema', vietnamese: 'bến xe buýt' },
            { finnish: 'tori', vietnamese: 'chợ' },
            { finnish: 'puisto', vietnamese: 'công viên' },
            { finnish: 'kahvila', vietnamese: 'quán cà phê' },
            { finnish: 'supermarketti', vietnamese: 'siêu thị' }
        ]
    },
    time: {
        title: '⏰ Thời gian',
        icon: '⏰',
        words: [
            { finnish: 'aika', vietnamese: 'thời gian' },
            { finnish: 'tunti', vietnamese: 'giờ' },
            { finnish: 'minuutti', vietnamese: 'phút' },
            { finnish: 'sekunti', vietnamese: 'giây' },
            { finnish: 'aamulla', vietnamese: 'buổi sáng' },
            { finnish: 'päivällä', vietnamese: 'buổi trưa/chiều' },
            { finnish: 'illalla', vietnamese: 'buổi tối' },
            { finnish: 'yöllä', vietnamese: 'ban đêm' },
            { finnish: 'tänään', vietnamese: 'hôm nay' },
            { finnish: 'huomenna', vietnamese: 'ngày mai' },
            { finnish: 'eilen', vietnamese: 'hôm qua' },
            { finnish: 'nyt', vietnamese: 'bây giờ' },
            { finnish: 'aina', vietnamese: 'luôn luôn' },
            { finnish: 'usein', vietnamese: 'thường xuyên' },
            { finnish: 'joskus', vietnamese: 'đôi khi' },
            { finnish: 'harvoin', vietnamese: 'hiếm khi' },
            { finnish: 'ei koskaan', vietnamese: 'không bao giờ' }
        ]
    },
    weather: {
        title: '🌤️ Thời tiết',
        icon: '🌤️',
        words: [
            { finnish: 'sää', vietnamese: 'thời tiết' },
            { finnish: 'aurinko', vietnamese: 'mặt trời' },
            { finnish: 'pilvi', vietnamese: 'mây' },
            { finnish: 'sade', vietnamese: 'mưa' },
            { finnish: 'sataa', vietnamese: 'trời mưa' },
            { finnish: 'lumi', vietnamese: 'tuyết' },
            { finnish: 'sataa lunta', vietnamese: 'trời có tuyết' },
            { finnish: 'tuuli', vietnamese: 'gió' },
            { finnish: 'tuulee', vietnamese: 'trời có gió' },
            { finnish: 'ukkonen', vietnamese: 'sấm sét' },
            { finnish: 'kylmä', vietnamese: 'lạnh' },
            { finnish: 'kuuma', vietnamese: 'nóng' },
            { finnish: 'lämmin', vietnamese: 'ấm' },
            { finnish: 'viileä', vietnamese: 'mát' },
            { finnish: 'aurinkoinen', vietnamese: 'nắng' },
            { finnish: 'pilvinen', vietnamese: 'nhiều mây' },
            { finnish: 'sateinen', vietnamese: 'mưa nhiều' },
            { finnish: 'lämpötila', vietnamese: 'nhiệt độ' },
            { finnish: 'aste/astetta', vietnamese: 'độ' }
        ]
    },
    transport: {
        title: '🚗 Phương tiện giao thông',
        icon: '🚗',
        words: [
            { finnish: 'auto', vietnamese: 'ô tô' },
            { finnish: 'bussi', vietnamese: 'xe buýt' },
            { finnish: 'juna', vietnamese: 'tàu hỏa' },
            { finnish: 'metro', vietnamese: 'tàu điện ngầm' },
            { finnish: 'raitiovaunu', vietnamese: 'xe điện tram' },
            { finnish: 'polkupyörä', vietnamese: 'xe đạp' },
            { finnish: 'lentokone', vietnamese: 'máy bay' },
            { finnish: 'laiva', vietnamese: 'tàu thủy' },
            { finnish: 'taksi', vietnamese: 'taxi' },
            { finnish: 'kävellen', vietnamese: 'đi bộ' }
        ]
    },
    jobs: {
        title: '💼 Nghề nghiệp',
        icon: '💼',
        words: [
            { finnish: 'opiskelija', vietnamese: 'sinh viên' },
            { finnish: 'opettaja', vietnamese: 'giáo viên' },
            { finnish: 'lääkäri', vietnamese: 'bác sĩ' },
            { finnish: 'insinööri', vietnamese: 'kỹ sư' },
            { finnish: 'myyjä', vietnamese: 'nhân viên bán hàng' },
            { finnish: 'kokki', vietnamese: 'đầu bếp' },
            { finnish: 'sairaanhoitaja', vietnamese: 'y tá' },
            { finnish: 'lakimies', vietnamese: 'luật sư' },
            { finnish: 'tarjoilija', vietnamese: 'phục vụ' },
            { finnish: 'siivoja', vietnamese: 'người dọn dẹp' },
            { finnish: 'kuljettaja', vietnamese: 'tài xế' },
            { finnish: 'poliisi', vietnamese: 'cảnh sát' },
            { finnish: 'palomies', vietnamese: 'lính cứu hỏa' },
            { finnish: 'toimistotyöntekijä', vietnamese: 'nhân viên văn phòng' },
            { finnish: 'yrittäjä', vietnamese: 'doanh nhân' },
            { finnish: 'työtön', vietnamese: 'thất nghiệp' },
            { finnish: 'eläkeläinen', vietnamese: 'người về hưu' }
        ]
    }
};

// Phrases Data
const phrasesData = {
    essential: {
        title: '50 Câu Quan Trọng Nhất',
        phrases: [
            { finnish: 'Hei!', vietnamese: 'Xin chào!' },
            { finnish: 'Kiitos!', vietnamese: 'Cảm ơn!' },
            { finnish: 'Ole hyvä!', vietnamese: 'Không có gì!' },
            { finnish: 'Anteeksi!', vietnamese: 'Xin lỗi!' },
            { finnish: 'Kyllä.', vietnamese: 'Có/Vâng.' },
            { finnish: 'Ei.', vietnamese: 'Không.' },
            { finnish: 'En ymmärrä.', vietnamese: 'Tôi không hiểu.' },
            { finnish: 'En tiedä.', vietnamese: 'Tôi không biết.' },
            { finnish: 'Minun nimeni on...', vietnamese: 'Tên tôi là...' },
            { finnish: 'Hauska tutustua!', vietnamese: 'Rất vui được gặp!' },
            { finnish: 'Mitä kuuluu?', vietnamese: 'Dạo này thế nào?' },
            { finnish: 'Hyvää, kiitos!', vietnamese: 'Tốt, cảm ơn!' },
            { finnish: 'Puhutko englantia?', vietnamese: 'Bạn nói tiếng Anh không?' },
            { finnish: 'Puhun vähän suomea.', vietnamese: 'Tôi nói một chút tiếng Phần Lan.' },
            { finnish: 'Voitko puhua hitaammin?', vietnamese: 'Bạn nói chậm hơn được không?' },
            { finnish: 'Voitko toistaa?', vietnamese: 'Bạn nhắc lại được không?' },
            { finnish: 'Mitä tämä tarkoittaa?', vietnamese: 'Cái này nghĩa là gì?' },
            { finnish: 'Missä on vessa?', vietnamese: 'Nhà vệ sinh ở đâu?' },
            { finnish: 'Paljonko tämä maksaa?', vietnamese: 'Cái này bao nhiêu tiền?' },
            { finnish: 'Mikä kello on?', vietnamese: 'Mấy giờ rồi?' },
            { finnish: 'Voitko auttaa minua?', vietnamese: 'Bạn giúp tôi được không?' },
            { finnish: 'Haluaisin...', vietnamese: 'Tôi muốn...' },
            { finnish: 'Yksi kahvi, kiitos!', vietnamese: 'Một cà phê, cảm ơn!' },
            { finnish: 'Lasku, kiitos!', vietnamese: 'Tính tiền!' },
            { finnish: 'Minulla on nälkä.', vietnamese: 'Tôi đói.' },
            { finnish: 'Minulla on jano.', vietnamese: 'Tôi khát.' },
            { finnish: 'Olen väsynyt.', vietnamese: 'Tôi mệt.' },
            { finnish: 'Olen sairas.', vietnamese: 'Tôi ốm.' },
            { finnish: 'Tarvitsen apua!', vietnamese: 'Tôi cần giúp đỡ!' },
            { finnish: 'Missä asut?', vietnamese: 'Bạn sống ở đâu?' },
            { finnish: 'Asun...', vietnamese: 'Tôi sống ở...' },
            { finnish: 'Mistä olet kotoisin?', vietnamese: 'Bạn đến từ đâu?' },
            { finnish: 'Olen Vietnamista.', vietnamese: 'Tôi từ Việt Nam.' },
            { finnish: 'Kuinka vanha olet?', vietnamese: 'Bạn bao nhiêu tuổi?' },
            { finnish: 'Mitä teet työksesi?', vietnamese: 'Bạn làm nghề gì?' },
            { finnish: 'Olen opiskelija.', vietnamese: 'Tôi là sinh viên.' },
            { finnish: 'Miten pääsen...?', vietnamese: 'Làm sao để đến...?' },
            { finnish: 'Mene suoraan.', vietnamese: 'Đi thẳng.' },
            { finnish: 'Käänny oikealle/vasemmalle.', vietnamese: 'Rẽ phải/trái.' },
            { finnish: 'Onko tämä lähellä?', vietnamese: 'Có gần không?' },
            { finnish: 'Milloin?', vietnamese: 'Khi nào?' },
            { finnish: 'Tänään / Huomenna / Eilen', vietnamese: 'Hôm nay / Ngày mai / Hôm qua' },
            { finnish: 'Odota!', vietnamese: 'Đợi!' },
            { finnish: 'Hetkinen!', vietnamese: 'Một chút!' },
            { finnish: 'Näkemiin!', vietnamese: 'Tạm biệt!' },
            { finnish: 'Hyvää päivää!', vietnamese: 'Chúc một ngày tốt!' },
            { finnish: 'Onnea!', vietnamese: 'Chúc may mắn!' },
            { finnish: 'Hyvää syntymäpäivää!', vietnamese: 'Chúc mừng sinh nhật!' },
            { finnish: 'Rakastan sinua.', vietnamese: 'Tôi yêu bạn.' },
            { finnish: 'Suomi on kaunis maa!', vietnamese: 'Phần Lan là đất nước đẹp!' }
        ]
    },
    intro: {
        title: 'Giới thiệu bản thân',
        phrases: [
            { finnish: 'Mikä sinun nimesi on?', vietnamese: 'Tên bạn là gì?' },
            { finnish: 'Minun nimeni on... / Olen...', vietnamese: 'Tên tôi là... / Tôi là...' },
            { finnish: 'Mistä olet kotoisin?', vietnamese: 'Bạn đến từ đâu?' },
            { finnish: 'Olen kotoisin Vietnamista.', vietnamese: 'Tôi đến từ Việt Nam.' },
            { finnish: 'Missä asut?', vietnamese: 'Bạn sống ở đâu?' },
            { finnish: 'Asun Helsingissä.', vietnamese: 'Tôi sống ở Helsinki.' },
            { finnish: 'Kuinka vanha olet?', vietnamese: 'Bạn bao nhiêu tuổi?' },
            { finnish: 'Olen 25 vuotta vanha.', vietnamese: 'Tôi 25 tuổi.' },
            { finnish: 'Mitä teet työksesi?', vietnamese: 'Bạn làm nghề gì?' },
            { finnish: 'Olen opiskelija / insinööri.', vietnamese: 'Tôi là sinh viên / kỹ sư.' },
            { finnish: 'Oletko naimisissa?', vietnamese: 'Bạn đã kết hôn chưa?' },
            { finnish: 'Olen naimisissa. / Olen sinkku.', vietnamese: 'Tôi đã kết hôn. / Tôi độc thân.' },
            { finnish: 'Onko sinulla lapsia?', vietnamese: 'Bạn có con không?' },
            { finnish: 'Minulla on kaksi lasta.', vietnamese: 'Tôi có 2 con.' }
        ]
    },
    language: {
        title: 'Ngôn ngữ & Giao tiếp',
        phrases: [
            { finnish: 'Puhutko suomea?', vietnamese: 'Bạn có nói tiếng Phần Lan không?' },
            { finnish: 'Puhun vähän suomea.', vietnamese: 'Tôi nói một chút tiếng Phần Lan.' },
            { finnish: 'Puhutko englantia?', vietnamese: 'Bạn có nói tiếng Anh không?' },
            { finnish: 'En puhu englantia.', vietnamese: 'Tôi không nói tiếng Anh.' },
            { finnish: 'Voitko puhua hitaammin?', vietnamese: 'Bạn có thể nói chậm hơn không?' },
            { finnish: 'Voitko toistaa?', vietnamese: 'Bạn có thể nhắc lại không?' },
            { finnish: 'Mitä tämä tarkoittaa?', vietnamese: 'Cái này có nghĩa là gì?' },
            { finnish: 'Miten sanotaan... suomeksi?', vietnamese: '"..." tiếng Phần Lan nói thế nào?' },
            { finnish: 'En ymmärrä.', vietnamese: 'Tôi không hiểu.' },
            { finnish: 'Ymmärrän.', vietnamese: 'Tôi hiểu.' },
            { finnish: 'Anteeksi?', vietnamese: 'Xin lỗi? (hỏi lại)' },
            { finnish: 'Anteeksi!', vietnamese: 'Xin lỗi! (xin lỗi)' }
        ]
    },
    shopping: {
        title: 'Mua sắm & Nhà hàng',
        phrases: [
            { finnish: 'Paljonko tämä maksaa?', vietnamese: 'Cái này giá bao nhiêu?' },
            { finnish: 'Se maksaa 10 euroa.', vietnamese: 'Nó có giá 10 euro.' },
            { finnish: 'Haluaisin ostaa...', vietnamese: 'Tôi muốn mua...' },
            { finnish: 'Otan tämän.', vietnamese: 'Tôi lấy cái này.' },
            { finnish: 'Onko teillä...?', vietnamese: 'Các bạn có... không?' },
            { finnish: 'Voinko maksaa kortilla?', vietnamese: 'Tôi có thể trả bằng thẻ không?' },
            { finnish: 'Käteisellä, kiitos.', vietnamese: 'Tiền mặt, cảm ơn.' },
            { finnish: 'Saisinko ruokalistan?', vietnamese: 'Cho tôi xin thực đơn?' },
            { finnish: 'Haluaisin tilata...', vietnamese: 'Tôi muốn gọi...' },
            { finnish: 'Yksi kahvi, kiitos!', vietnamese: 'Một cà phê, cảm ơn!' },
            { finnish: 'Mitä suosittelette?', vietnamese: 'Bạn gợi ý món gì?' },
            { finnish: 'Olen allerginen...', vietnamese: 'Tôi bị dị ứng với...' },
            { finnish: 'Lasku, kiitos!', vietnamese: 'Tính tiền, cảm ơn!' },
            { finnish: 'Kiitos, oli hyvää!', vietnamese: 'Cảm ơn, rất ngon!' }
        ]
    },
    direction: {
        title: 'Hỏi đường & Di chuyển',
        phrases: [
            { finnish: 'Missä on...?', vietnamese: '... ở đâu?' },
            { finnish: 'Missä on vessa?', vietnamese: 'Nhà vệ sinh ở đâu?' },
            { finnish: 'Missä on rautatieasema?', vietnamese: 'Nhà ga xe lửa ở đâu?' },
            { finnish: 'Miten pääsen...?', vietnamese: 'Làm sao để đến...?' },
            { finnish: 'Mene suoraan.', vietnamese: 'Đi thẳng.' },
            { finnish: 'Käänny oikealle.', vietnamese: 'Rẽ phải.' },
            { finnish: 'Käänny vasemmalle.', vietnamese: 'Rẽ trái.' },
            { finnish: 'Se on tuolla.', vietnamese: 'Nó ở đằng kia.' },
            { finnish: 'Onko tämä lähellä?', vietnamese: 'Chỗ này có gần không?' },
            { finnish: 'Kuinka kaukana?', vietnamese: 'Cách bao xa?' },
            { finnish: 'Noin 10 minuuttia kävellen.', vietnamese: 'Khoảng 10 phút đi bộ.' },
            { finnish: 'Millä pääsen sinne?', vietnamese: 'Đi bằng gì để đến đó?' },
            { finnish: 'Bussilla / Junalla / Metrolla', vietnamese: 'Bằng xe buýt / Tàu hỏa / Metro' }
        ]
    },
    permission: {
        title: 'Xin phép & Đề nghị',
        phrases: [
            { finnish: 'Saanko...?', vietnamese: 'Tôi có thể... được không?' },
            { finnish: 'Saanko istua tähän?', vietnamese: 'Tôi ngồi đây được không?' },
            { finnish: 'Kyllä, saat. / Ei, et saa.', vietnamese: 'Được. / Không được.' },
            { finnish: 'Voisitko...?', vietnamese: 'Bạn có thể... không?' },
            { finnish: 'Voisitko auttaa minua?', vietnamese: 'Bạn có thể giúp tôi không?' },
            { finnish: 'Haluaisitko...?', vietnamese: 'Bạn có muốn... không?' },
            { finnish: 'Haluaisitko kahvia?', vietnamese: 'Bạn có muốn cà phê không?' },
            { finnish: 'Kyllä kiitos!', vietnamese: 'Có, cảm ơn!' },
            { finnish: 'Ei kiitos.', vietnamese: 'Không, cảm ơn.' },
            { finnish: 'Sopiiko...?', vietnamese: '... có được không?' },
            { finnish: 'Sopiiko huomenna?', vietnamese: 'Ngày mai có được không?' },
            { finnish: 'Sopii! / Ei sovi.', vietnamese: 'Được! / Không được.' },
            { finnish: 'Ole hyvä!', vietnamese: 'Xin mời! / Không có gì!' },
            { finnish: 'Ei se mitään.', vietnamese: 'Không sao đâu.' }
        ]
    },
    health: {
        title: 'Sức khỏe & Cấp cứu',
        phrases: [
            { finnish: 'Miten voit?', vietnamese: 'Bạn khỏe không? (sức khỏe)' },
            { finnish: 'Voin hyvin. / En voi hyvin.', vietnamese: 'Tôi khỏe. / Tôi không khỏe.' },
            { finnish: 'Olen sairas.', vietnamese: 'Tôi bị ốm.' },
            { finnish: 'Minulla on kuumetta.', vietnamese: 'Tôi bị sốt.' },
            { finnish: 'Minulla on flunssa.', vietnamese: 'Tôi bị cảm.' },
            { finnish: 'Minua sattuu...', vietnamese: 'Tôi bị đau...' },
            { finnish: 'Minua sattuu päähän.', vietnamese: 'Tôi đau đầu.' },
            { finnish: 'Minua sattuu vatsaan.', vietnamese: 'Tôi đau bụng.' },
            { finnish: 'Tarvitsen lääkärin.', vietnamese: 'Tôi cần bác sĩ.' },
            { finnish: 'Missä on sairaala?', vietnamese: 'Bệnh viện ở đâu?' },
            { finnish: 'Missä on apteekki?', vietnamese: 'Hiệu thuốc ở đâu?' },
            { finnish: 'Tarvitsen apua!', vietnamese: 'Tôi cần giúp đỡ!' },
            { finnish: 'Soita ambulanssi!', vietnamese: 'Gọi xe cấp cứu!' },
            { finnish: 'Hätänumero on 112.', vietnamese: 'Số khẩn cấp là 112.' }
        ]
    }
};

// Get all vocabulary as flat array for flashcards
function getAllVocabulary() {
    const allWords = [];
    for (const category in vocabularyData) {
        vocabularyData[category].words.forEach(word => {
            allWords.push({
                ...word,
                category: category
            });
        });
    }
    return allWords;
}

// Get vocabulary by category
function getVocabularyByCategory(category) {
    if (category === 'all') {
        return getAllVocabulary();
    }
    if (vocabularyData[category]) {
        return vocabularyData[category].words.map(word => ({
            ...word,
            category: category
        }));
    }
    return [];
}

// Get all phrases as flat array
function getAllPhrases() {
    const allPhrases = [];
    for (const category in phrasesData) {
        phrasesData[category].phrases.forEach(phrase => {
            allPhrases.push({
                ...phrase,
                category: category
            });
        });
    }
    return allPhrases;
}
