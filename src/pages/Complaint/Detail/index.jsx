import CustomModal from '@/shared/components/Modal';
import CustomTitle from '@/shared/components/Title';
import { Button, Col, Descriptions, Flex, Form, Row, Timeline, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import styles from './Detail.module.scss';
import ComplaintModal from '@/shared/components/ComplaintModal';
const { Text, Title } = Typography;

const items = [
  {
    key: '1',
    label: 'Şikayət nömrəsi',
    children: '10234',
  },
  {
    key: '2',
    label: 'Şikayət etdiyiniz fəaliyyət sahəsi',
    children: ' İnternet (GPON, ADSL və s.)',
  },
  {
    key: '3',
    label: 'Şikayətçi olduğunuz şirkət',
    children: ' “ADANET” MMC',
  },
  {
    key: '4',
    label: 'Şikayətin xarakteristikası',
    children: 'Xidmətə qoşulma',
  },
  {
    key: '5',
    label: 'Abunəçi kodu',
    children: '999887888',
  },
  {
    key: '6',
    label: 'Şəhər',
    children: 'Bakı',
  },
  {
    key: '7',
    label: 'Rayon',
    children: 'Yasamal',
  },
  {
    key: '8',
    label: 'Küçə',
    children: 'Şərifzadə',
  },
  {
    key: '9',
    label: 'Bina',
    children: '15',
  },
  {
    key: '10',
    label: 'Mənzil',
    children: '12',
  },
  {
    key: '11',
    label: 'Əlaqə nömrəsi',
    children: '+994555555555',
  },
  {
    key: '12',
    label: 'Stasionar telefon:',
    children: '+994125444444',
  },
  {
    key: '13',
    label: 'E-poçt:',
    children: 'test.mail@icta.az',
  },
]
const items2 = [
  {
    key: '1',
    label: 'Şikayətin mövzusu',
    children: 'Xidmətə qoşulma',
  },
  {
    key: '2',
    label: 'Şikayətin mətni',
    children: 'Müraciətin üzərindən uzun müddət keçməsinə baxmayaraq qoşulma təmin edilməmişdir.',
  },
  {
    key: '3',
    label: 'Fayl',
    children: '',
  }
]
const itemsTimeline = [
  {
    label: <Text strong>01.09.2023</Text>,
    children: (
      <>
        <p>Baxılır</p>
        <Text type="secondary">Abunəçi</Text>
      </>
    )
  },
  {
    label: '',
    children: 'Cavablandırıldı'
  }
]


export default function Detail() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const createComplaint = () => {
    navigate('/');
    setIsModalOpen(false)
};
  return (
    <>
      <CustomTitle header={"ŞİKAYƏT MƏLUMATLARI"} />

      <div className={styles.complaintInfo}>
        <div className={styles.personInfo}>
          <Descriptions column={2} items={items} />
        </div>
        <div className={styles.complaintSubject}>
          <Descriptions column={1} items={items2} />
        </div>
      </div>
      <CustomTitle header={"ŞİKAYƏTƏ BAXILMANIN NƏTİCƏSİ"} />

      <div className={styles.complaintStatus}>
        <Row>
          <Col span={6}>
            <Timeline
              mode={'left'}
              items={itemsTimeline}
            />
          </Col>
        </Row>
      </div>

      <Flex justify='end'>
        <Button
          size="large"
          type="primary"
          className={styles.btn}
          onClick={showModal}
        >
          ŞİKAYƏTİ LƏĞV ET
        </Button>
      </Flex>
        <ComplaintModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />      
        {/* <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                    <InfoModalContent onClick={createComplaint} title={"YENİ ŞİKAYƏT YARADILDI"} />
                </CustomModal> */}
    </>
  )
}
