# File Storage Service Configuration

## Environment Variables

[vars] (Optional)
KV_DEFAULT_FILE_TTL = "86400"
KV_MAX_FILE_SIZE_BYTES = "26214400" 
KV_BASE_URL = "Replace with your domain"

## KV Namespace Configuration

[[kv_namespaces]]
binding = "KV_DEFAULT_NAMESPACE"
id = "Replace with your actual KV namespace ID"
