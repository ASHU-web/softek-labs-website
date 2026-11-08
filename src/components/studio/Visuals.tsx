import {
  ArrowUpRight,
  Check,
  Play,
  MessageCircle,
  MousePointer2,
  Layers,
  BarChart3,
} from "lucide-react";
export function HeroVisual() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Illustration of Softek Labs services: a creative campaign, customer conversations, and business tools. Concept artwork, not campaign results."
    >
      <div className="art-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="art-top">
        <span className="tiny-cross">✳</span>
        <span>IDEAS INTO IMPACT</span>
        <span>SL / 01</span>
      </div>
      <div className="campaign-card">
        <div className="campaign-meta">
          <span>YOUR NEXT BIG THING</span>
          <ArrowUpRight size={20} />
        </div>
        <div className="campaign-title">
          BE
          <br />
          <span>SEEN.</span>
        </div>
        <div className="poster-star" aria-hidden="true">
          ✳
        </div>
        <div className="campaign-bottom">
          <span>
            Good ideas deserve
            <br />a bigger audience.
          </span>
          <span className="play-circle">
            <Play size={18} fill="currentColor" />
          </span>
        </div>
      </div>
      <div className="message-card">
        <div className="message-icon">
          <MessageCircle size={23} />
        </div>
        <div>
          <strong>Let’s start a conversation.</strong>
          <span>Your business. Their next favourite.</span>
        </div>
        <Check size={16} />
      </div>
      <div className="software-card">
        <div className="mini-window">
          <span />
          <span />
          <span />
          <span className="mini-label">YOUR BUSINESS, CONNECTED</span>
        </div>
        <div className="software-body">
          <span className="software-icon">
            <Layers size={23} />
          </span>
          <div>
            <strong>Everything, in sync.</strong>
            <span>One workflow. Built for you.</span>
          </div>
        </div>
        <div className="workflow-line">
          <span>Enquiry</span>
          <i>→</i>
          <span>Conversation</span>
          <i>→</i>
          <span className="workflow-end">
            Opportunity <Check size={12} />
          </span>
        </div>
      </div>
      <div className="floating-label">
        <MousePointer2 size={17} fill="currentColor" /> Your next move
      </div>
      <div className="art-bottom">
        <span>CREATIVITY × TECHNOLOGY</span>
        <span>BUILT AROUND YOU ↗</span>
      </div>
    </div>
  );
}
export function WorkVisual() {
  return (
    <div className="work-visual" aria-label="Illustrative inventory dashboard">
      <div className="dashboard">
        <div className="dashboard-sidebar">
          <span className="dash-brand">s↗</span>
          <Layers size={19} />
          <BarChart3 size={19} />
          <MessageCircle size={19} />
        </div>
        <div className="dashboard-main">
          <div className="dashboard-top">
            <span>Workspace / Inventory</span>
            <span className="avatar">SL</span>
          </div>
          <div className="dashboard-heading">
            <strong>
              Your operations.
              <br />
              One clear picture.
            </strong>
            <span className="dashboard-pill">All warehouses ↗</span>
          </div>
          <div className="dashboard-stats">
            <div>
              <span>Stock visibility</span>
              <strong>
                Connected <i />
              </strong>
            </div>
            <div>
              <span>Dispatch workflow</span>
              <strong>
                Organised <i />
              </strong>
            </div>
          </div>
          <div className="dashboard-table">
            <div>
              <span>WAREHOUSE</span>
              <span>WORKFLOW</span>
              <span>STATUS</span>
            </div>
            {["Central warehouse", "North warehouse", "South warehouse"].map(
              (s, i) => (
                <div key={s}>
                  <span>
                    <span className="table-icon">▦</span>
                    {s}
                  </span>
                  <span>
                    {
                      ["Stock review", "Order allocation", "Dispatch tracking"][
                        i
                      ]
                    }
                  </span>
                  <span className="table-status">Connected</span>
                </div>
              ),
            )}
          </div>
          <div className="dashboard-caption">
            A simpler way to keep things moving. <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
      <span className="visual-caption">
        ILLUSTRATIVE INTERFACE · CUSTOM SOFTWARE
      </span>
    </div>
  );
}
