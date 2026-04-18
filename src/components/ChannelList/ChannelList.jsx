import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Tv, MonitorPlay, Film, Globe, Radio } from 'lucide-react';
import { CHANNEL_GROUPS } from './ChannelData';
import './ChannelList.css';
import { useLang } from '../../context/LanguageContext';


const getIcon = (type, color = "#001A46") => {
  const icons = {
    tv: <Tv size={18} color={color} />,
    monitor: <MonitorPlay size={18} color={color} />,
    film: <Film size={18} color={color} />,
    globe: <Globe size={18} color={color} />,
    radio: <Radio size={18} color={color} />
  };
  return icons[type] || <Tv size={18} color={color} />;
};

export default function ChannelList() {
  const [activeCategory, setActiveCategory] = useState(CHANNEL_GROUPS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. Create a reference to the scrollable channel list
  const channelListRef = useRef(null);

  // 2. Add an effect that fires every time the activeCategory changes
  useEffect(() => {
    if (channelListRef.current) {
      // Instantly scroll the box back to the top
      channelListRef.current.scrollTop = 0;
    }
  }, [activeCategory]); // This array tells React to only run this when activeCategory changes

  const selectedGroup = useMemo(() => 
    CHANNEL_GROUPS.find(g => g.id === activeCategory), 
    [activeCategory]
  );

  const filteredCategories = useMemo(() => {
    return CHANNEL_GROUPS.filter(g => 
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.searchTerms?.includes(searchQuery.toLowerCase()) // Now uses the optimized search terms
    );
  }, [searchQuery]);

  const { t } = useLang();

  return (
    <section className="cl-section" id="channels">
      <div className="cl-container">
        
        {/* PREMIUM TYPOGRAPHY HEADER */}
        <div className="cl-header">
          <div className="cl-badge">{t('channelList.badge')}</div>
          <h2 className="cl-title">
            {t('channelList.title1')} <br />
            <span>{t('channelList.title2')}</span>
          </h2>
          <p className="cl-subtitle">{t('channelList.subtitle')}</p>
        </div>

        {/* PLAYER BOX */}
        <div className="cl-player-wrapper">
          
          {/* SIDEBAR */}
          <div className="cl-sidebar">
            <div className="cl-sidebar-search">
              <Search size={16} color="#94a3b8" />
              <input 
                type="text" 
                placeholder="Search categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="cl-sidebar-list">
              <div className="cl-sidebar-label">{t('channelList.sideBarList-label')}</div>
              {filteredCategories.map((group) => (
                <button 
                  key={group.id}
                  className={`cl-sidebar-item ${activeCategory === group.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(group.id)}
                >
                  <span className="cl-item-name">{group.name}</span>
                  <span className="cl-item-count">{group.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* VIEWPORT */}
          <div className="cl-viewport">
            <div className="cl-viewport-header">
              <div className="cl-vh-info">
                {getIcon(selectedGroup.iconType)}
                <h3>{selectedGroup.name}</h3>
              </div>
              <span className="cl-vh-badge">{selectedGroup.count} {t('channelList.cl-badge-text')}</span>
            </div>
            
            {/* 3. Attach the ref here so React knows which box to scroll */}
            <div className="cl-channel-list" ref={channelListRef}>
              {[...selectedGroup.featured, ...selectedGroup.fullList].map((channel, index) => (
                <div key={index} className="cl-channel-row">
                  <div className="cl-channel-icon-box">
                    {getIcon(selectedGroup.iconType, "#64748b")}
                  </div>
                  <span className="cl-channel-name">{channel}</span>
                  <div className="cl-hd-tag">HD</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}