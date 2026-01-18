const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('admin_token');
    }
  }

  setToken(token: string | null) {
    this.token = token;
    if (token && typeof window !== 'undefined') {
      localStorage.setItem('admin_token', token);
    } else if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token');
    }
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const response = await this.request<{
      success: boolean;
      data: { token: string; role: string; id: string; email: string };
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.success && response.data.token) {
      this.setToken(response.data.token);
    }

    return response;
  }

  async logout() {
    this.setToken(null);
  }

  // Gallery endpoints
  async getGallery() {
    return this.request<{ success: boolean; data: any[] }>('/gallery');
  }

  async getGalleryPublic() {
    return this.request<{ success: boolean; data: any[] }>('/gallery/public');
  }

  async createGalleryItem(data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/gallery`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async updateGalleryItem(id: string, data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/gallery/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async deleteGalleryItem(id: string) {
    return this.request(`/gallery/${id}`, { method: 'DELETE' });
  }

  // News endpoints
  async getNews() {
    return this.request<{ success: boolean; data: any[] }>('/news');
  }

  async getNewsPublic() {
    return this.request<{ success: boolean; data: any[] }>('/news/public');
  }

  async createNewsItem(data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/news`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async updateNewsItem(id: string, data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/news/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async deleteNewsItem(id: string) {
    return this.request(`/news/${id}`, { method: 'DELETE' });
  }

  // Downloadable content endpoints
  async getDownloadableContent() {
    return this.request<{ success: boolean; data: any[] }>('/downloadable-content');
  }

  async getDownloadableContentPublic() {
    return this.request<{ success: boolean; data: any[] }>('/downloadable-content/public');
  }

  async createDownloadableContent(data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/downloadable-content`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async updateDownloadableContent(id: string, data: FormData) {
    const token = this.token;
    const response = await fetch(`${this.baseUrl}/downloadable-content/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async deleteDownloadableContent(id: string) {
    return this.request(`/downloadable-content/${id}`, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
