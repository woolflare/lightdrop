# Cloudflare Workers-based File Storage Service Configuration

## Environment Variables

```toml
[vars]
# Optional settings
KV_DEFAULT_FILE_TTL = "86400"         # Default file expiration time in seconds (24 hours)
KV_MAX_FILE_SIZE_BYTES = "26214400"   # Maximum file size in bytes (25MB)
KV_BASE_URL = "your-domain.com"       # Your custom domain
```

## KV Namespace Configuration

```toml
[[kv_namespaces]]
binding = "KV_DEFAULT_NAMESPACE"
id = "your-kv-namespace-id"           # Replace with your actual KV namespace ID
```

## Configuration Details

- **KV_DEFAULT_FILE_TTL**: Controls file storage duration before expiration (default: 24 hours)
- **KV_MAX_FILE_SIZE_BYTES**: Sets maximum allowed file size (default: 25MB)
- **KV_BASE_URL**: Specify your custom domain for the service
- **KV_DEFAULT_NAMESPACE**: KV namespace binding used for file storage

**Note**: Make sure to replace the placeholder values with your actual configuration settings.
