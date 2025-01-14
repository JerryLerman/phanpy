import './embed-modal.css';

import Icon from './icon';

function EmbedModal({ html, url, onClose = () => {} }) {
  return (
    <div class="embed-modal-container">
      <div class="top-controls">
        <button type="button" class="light" onClick={() => onClose()}>
          <Icon icon="x" />
        </button>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="button plain"
          >
            <span>Open link</span> <Icon icon="external" />
          </a>
        )}
      </div>
      <div class="embed-content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default EmbedModal;
