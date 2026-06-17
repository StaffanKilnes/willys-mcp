import time
from willys_mcp_shim.auth import TokenStore


def test_token_valid_within_ttl(tmp_path):
    store = TokenStore(persist_path=str(tmp_path / "t.json"), ttl_seconds=100)
    store.add("tok")
    assert store.has("tok") is True


def test_token_expires_after_ttl(tmp_path):
    store = TokenStore(persist_path=str(tmp_path / "t.json"), ttl_seconds=0.05)
    store.add("tok")
    time.sleep(0.1)
    assert store.has("tok") is False


def test_no_ttl_means_forever(tmp_path):
    store = TokenStore(persist_path=str(tmp_path / "t.json"))
    store.add("tok")
    assert store.has("tok") is True
