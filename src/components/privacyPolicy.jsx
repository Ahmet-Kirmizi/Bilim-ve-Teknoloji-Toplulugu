import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import {useTranslation} from "react-i18next";

function PrivacyPolicy() {
    const [openModal, setOpenModal] = useState(true);
    const [showFullText, setShowFullText] = useState(false);
    const { t } = useTranslation();
    const [modalSize, setModalSize] = useState('md');

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size={modalSize}>
                <Modal.Header className="text-2xl p-6" icon="none">{t('privacyPolicyTitle')}</Modal.Header>
                <Modal.Body className="pl-6 pr-6">
                    <div className="space-y-6">
                        {showFullText ? (
                            <>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    Bilim ve Teknoloji Topluluğu olarak kişisel verilerinizin güvenliği ve gizliliği hususlarına azami önem vermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında “Veri Sorumlusu” sıfatıyla hareket ederek; kişisel verilerin toplanması, muhafazası, işlenmesi, mevzuata uygun olarak aktarımı, ne kadar süreyle saklanacağı, veri sahiplerinin hakları vb. gibi sorumlulukların mevzuat hükümleri çerçevesinde uygulandığını aydınlatmak üzere işbu bilgilendirme metni hazırlanmıştır.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                    to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                    soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </>
                        ) : (
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {t('privacyPolicyQuestion')}
                                <br />
                                <Button onClick={toggleFullText} color="gray" className="border-0">Read More</Button>
                            </p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} className="bg-green-500 text-white p-1">{t('accept')}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PrivacyPolicy;
