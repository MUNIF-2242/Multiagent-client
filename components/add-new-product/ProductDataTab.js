import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap';
import MediaPane from './tab-panes/MediaPane'
import InventoryPane from './tab-panes/InventoryPane'
import PricePane from './tab-panes/PricePane'
import AttributePane from './tab-panes/AttributePane'
import ShippingInfoPane from './tab-panes/ShippingInfoPane'
import VideoPane from './tab-panes/VideoPane'
import ShippingConfigPane from './tab-panes/ShippingConfigPane'
import OfferPane from './tab-panes/OfferPane'

const ProductDataTab = () => {
    const [activeTab, setActiveTab] = useState('media');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
    <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={handleTabChange}
        className="btn-box d-flex flex-wrap gap-1 mb-30"
    >
        <Nav.Item>
            <Nav.Link
                eventKey="media"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'media' ? 'active' : ''
                }`}
            >
                Media
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="inventory"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'inventory' ? 'active' : ''
                }`}
            >
                Inventory
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="price"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'price' ? 'active' : ''
                }`}
            >
                Price
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="attribute"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'attribute' ? 'active' : ''
                }`}
            >
                Attribute
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="shipping-info"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'shipping-info' ? 'active' : ''
                }`}
            >
                Shipping info
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="video"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'video' ? 'active' : ''
                }`}
            >
                Video
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="shipping-config"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'shipping-config' ? 'active' : ''
                }`}
            >
                Shipping Configuration
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link
                eventKey="offer"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'offer' ? 'active' : ''
                }`}
            >
                Offer
            </Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content className="product-data-tab">
        <Tab.Pane eventKey="media" className={`tab-pane ${activeTab === 'media' ? 'show active' : ''}`}>
            <MediaPane/>
        </Tab.Pane>
        <Tab.Pane eventKey="inventory" className={`tab-pane ${activeTab === 'inventory' ? 'show active' : ''}`}>
            <InventoryPane/>
        </Tab.Pane>
        <Tab.Pane eventKey="price" className={`tab-pane ${activeTab === 'price' ? 'show active' : ''}`}>
            <PricePane/>
        </Tab.Pane>
        <Tab.Pane eventKey="attribute" className={`tab-pane ${activeTab === 'attribute' ? 'show active' : ''}`}>
            <AttributePane/>
        </Tab.Pane>
        <Tab.Pane eventKey="shipping-info" className={`tab-pane ${activeTab === 'shipping-info' ? 'show active' : ''}`}>
            <ShippingInfoPane/>
        </Tab.Pane>
        <Tab.Pane eventKey="video" className={`tab-pane ${activeTab === 'video' ? 'show active' : ''}`}>
            <VideoPane/>
        </Tab.Pane>
        <Tab.Pane eventKey="shipping-config" className={`tab-pane ${activeTab === 'shipping-config' ? 'show active' : ''}`}>
            <ShippingConfigPane/>
        </Tab.Pane>
        <Tab.Pane eventKey="offer" className={`tab-pane ${activeTab === 'offer' ? 'show active' : ''}`}>
            <OfferPane/>
        </Tab.Pane>
    </Tab.Content>
    </>
  )
}

export default ProductDataTab